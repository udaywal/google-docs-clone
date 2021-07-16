import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Login from '../components/Login';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

import { getSession, useSession } from 'next-auth/client'

export default function Home() {

  const [session] = useSession();

  if (!session) <Login />

  return (
    <div>
      
      <Head>
        <title>Google Docs: Free Online Docs for Personal Use</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-3 py-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-700">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="h-10 w-10 border-0"
            >
              <Icon name="more_vert" size="2xl" />
            </Button>
          </div>

          <div>
            <div className="relative h-44 w-32 border-2 cursor-pointer hover:border-blue-500">
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>
            <p className="ml-2 mt-2 text-sm">Blank</p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-3 py-4 space-y-4">
          
          <div className="flex items-center justify-between text-gray-700 text-sm">
            <p className="text-sm flex-grow">My Documents</p>
            <p className="text-sm mr-20">Date Created</p>
            <Icon name="folder" size="xl" color="gray" />
          </div>

        </div>
      </section>
      
    </div>
  )
}
