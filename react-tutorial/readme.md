```
npm create vite@latest . --template react
```



## Code quality tools, 

    make your project cleaner across a team people

    prettier formatting
    eslint linting


## react bootstrap (bootstrap react-bootstrap)
    
    for CSS you have a couple options

    custom css using normal css sass etc...

    tailwind 

    emotions.js (element based css)

    the above are full design css solutions, 
    ie nothing is easy you have to do everythign youself (seaching stackoverflow). 
    Only recommend if your a decent designer and know your way around css

    other alternative is 

        material ui

        bootstrap

    I prefer bootstrap

```
npm install bootstrap react-bootstrap
```

## react router v6 (react-router-dom) 
    enable routing between pages

```
npm install react-router-dom
```

## react query (react-query)
    better data fetching
    automatic refetching
    caching
    better than using custom made hooks   
    use axios for a simpler http api

```
npm install react-query axios
```

## formik (formik) + joi for schema based validation 
    form handling
```
npm install formik joi
```

## State managemnt

    stay away from complex state managemnet libraries unless sufficently complex UI
        - redux 
        - xstate


    Most of the time you can get away with the react context api and hooks

## AWS amplify + Cognito


    authentication + authorization solution

    don't re invent the wheel, 

    plug and play library does all the heavy lifting for you

    alternatives include 
        - auth0
        - okta

    self hosted
        - keycloak (don't recommend)
    custom solution (don't recommend)


```
Install the Amplify CLI
https://docs.amplify.aws/cli/start/install/
```

```
Use this to configure amplify within your project

https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/#set-up-backend-resources

you have define global in your vite.config.ts

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  plugins: [react()],
})

```