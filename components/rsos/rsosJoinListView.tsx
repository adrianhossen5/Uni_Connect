import { useSession } from 'next-auth/react';
import React from 'react';
import RSOJoinView from './rsoJoinView';
import router from 'next/router';

const RSOJoinListView = (props: { rsosToJoin: any }) => {
  const { status: sesh } = useSession();
  const rsosToJoin = props.rsosToJoin;

  if (sesh === 'loading') {
    return null;
  }

  if (sesh === 'unauthenticated') {
    router.push('/login');
  }

  if (rsosToJoin === null || rsosToJoin === undefined || rsosToJoin.length === 0) {
    return (
      <div className="py-10">
        <div className="mx-auto rounded-[0.5rem] w-max border-[0.175rem] border-neutral-700 px-3 py-1 font-bold transition bg-neutral-50 text-lg hover:bg-neutral-400 hover:text-gray-800">
          There are no rsos!
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="py-[4.4rem] flex-col text-center mx-auto max-w-sm xs:max-w-sm 
      sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-md 2xl:max-w-lg grid md:grid-cols-1 
      lg:grid-cols-1"
      >
        {' '}
        {rsosToJoin.map((rso: any) => (
          <div key={rso.id}>
            <RSOJoinView rso={rso}></RSOJoinView>
          </div>
        ))}
      </div>
    );
  }
};

export default RSOJoinListView;
