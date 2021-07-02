# Todolist SkApp

A mini todolist application utilizing MySky UI, setJSON & getJSON from Skynet

## About Skynet

Skynet is a hosting platform that is easy, fast and secure to use for developers to build applications on the decentralized Internet. 
Visit [Skynet](https://siasky.net/) to learn more

## How to run

In the project directory, do the follwings:

#### 1. `npm install` or `yarn install`

#### 2. `npm start` or `yarn start`

The application will then proceed to run in the development mode through http://localhost:3000

## Challenges

I was spending a few hours on how to debug 'client.loadMySky is not a function' as I didn't know that I installed skynet-js dependency incorrectly. This mistake made me realized that I should have checked the difference between the dependency from mine and the one from skynet workshop's package.json. Thanks to Skynet's Discord community, I fixed it by doing "npm install skynet-js@bet" instead (you can also use yarn). Another issue that I encountered was setting up my data for setJSON. For this, I made use the reference from: [SkynetClient API Usage (Browser-JS)](https://siasky.net/AAAGR5D19nL6v9MXXjDBWqAxA68Ysu1Pahf4j-8LHCaK5A/#/). However, when I followed the instruction, I kept getting 'undefined value ' for 'skyLink' field. Again, thanks to Skynet's Discord server, I was able to solve the problem by replacing it with 'dataLink'.

## Improvement

- Enable users to edit and check for completing a list
- [Learn how to use Handshake](https://support.siasky.net/key-concepts/handshake-names) 
- [Learn to automate deployment using GitHub Action](https://blog.sia.tech/automated-deployments-on-skynet-28d2f32f6ca1)

## Resources

Check out resources below to learn more how to use features from Skynet. Doing Skynet workshop is a good starting point and you will learn a lot from the explanations.
- [Skynet Workshop Repo](https://github.com/SkynetLabs/skynet-workshop)
- [Skynet Documentation](https://siasky.net/docs/#introduction)

