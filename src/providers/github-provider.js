import React, { children, createContext, useState } from 'react'
import Repositories from '../components/repositories';

export const GithubContext = createContext( {
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({children}) => {
    const [githubState, setgithub] = useState({
      user: {
        login: undefined,
        name: undefined,
        html_Url: undefined,
        blog: undefined,
        company: undefined,
        location: undefined,
        followers: 0,
        following: 0,
        public_gists: 0,
        public_repos: 0,
      },
      repositories: [],
      starred: [],  
    });

    const contextValue = {
      githubState, 
    }
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;