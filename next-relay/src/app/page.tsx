'use client'

import { initRelayEnvironment } from '../RelayEnvironment'

import { graphql, fetchQuery, commitMutation } from "relay-runtime";

import { pageUserQuery } from '../../__generated__/pageUserQuery.graphql';
import { FormEvent, useRef, useState } from 'react';

const Home = () => {
  const [user, setUser] = useState<pageUserQuery['response']['user']>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const nameRef = useRef<HTMLInputElement>(null)
  const birthDateRef = useRef<HTMLInputElement>(null)
  const motherNameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const relayQuerySetup = async (id : string) => {
    const environment = initRelayEnvironment();
    const query = graphql`
      query pageUserQuery($id: String!) {
        user(id: $id) {
          id,
          name,
          birth_date,
          mother_name,
          phone
        }
      }
    `
    // Execute the query without cors
    const observable = await fetchQuery<pageUserQuery>(environment, query, { id: id })
    const data = await observable.toPromise()
  
    return data
  }

  const addUser = (e: FormEvent) => {
    e.preventDefault()

    const name = nameRef.current?.value
    const birth_date = birthDateRef.current?.value
    const mother_name = motherNameRef.current?.value
    const phone = phoneRef.current?.value

    const mutate = graphql`
      mutation pageAddUserMutation($name: String!, $birth_date: String!, $mother_name: String!, $phone: String!) {
        addUser(name: $name, birth_date: $birth_date, mother_name: $mother_name, phone: $phone) {
          id,
          name,
          birth_date,
          mother_name,
          phone
        }
      }
    `

    commitMutation(
      initRelayEnvironment(),
      {
        mutation: mutate,
        variables: {
          name: name!,
          birth_date: birth_date!,
          mother_name: mother_name!,
          phone: phone!
        },
        onCompleted: (data: any) => {
          setUser(data.addUser)
        }
      }
    )
  }

  const search = () => {
    const id = inputRef.current?.value
    relayQuerySetup(id!).then(data => {
      setUser(data!.user)
    })
  }

  return (
    <div className='m-20'>      
      <div className='flex gap-2 justify-end'>
        <input className='border border-solid border-black rounded' ref={inputRef} type="text" />
        <button onClick={search}>Search</button>
      </div>

      <form onSubmit={e => addUser(e)} className='flex flex-col gap-4 mt-8 items-center'>
        <h1 className='text-xl'>Add User</h1>

        <div className='flex justify-between w-80'>
          <label htmlFor="name">Name</label>
          <input className='border border-solid border-black rounded' id='name' ref={nameRef} type="text" />
        </div>

        <div className='flex justify-between w-80'>
          <label htmlFor="birth_date">Birth Date</label>
          <input className='border border-solid border-black rounded' id='birth_date' ref={birthDateRef} type="text" />
        </div>

        <div className='flex justify-between w-80'>
          <label htmlFor="mother_name">Mother Name</label>
          <input className='border border-solid border-black rounded' id='mother_name' ref={motherNameRef} type="text" />
        </div>

        <div className='flex justify-between w-80'>
          <label htmlFor="phone">Phone</label>
          <input className='border border-solid border-black rounded' id='phone' ref={phoneRef} type="text" />
        </div>
        <button className='flex justify-center w-40' type="submit">Add User</button>
      </form>

      {user ? (
        <div>
          <h2>{user.name}</h2>
          <h2>{user.birth_date}</h2>
          <h2>{user.mother_name}</h2>
          <h2>{user.phone}</h2>
        </div>
      ): null}
      
    </div>
  )
}

export default Home;