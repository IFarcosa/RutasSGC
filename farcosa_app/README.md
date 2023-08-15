# FARCOSA APP

## Dependecies

- npm >= 16
- expo-cli
- [expo-app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_BO&pli=1)

## RUNNING THE PROJECT

1. Clone repository or download repository

2. Install all the dependecies

```bash
  npm install
```

3. RUN start command

```bash
 npm run start
```

once this command is launch your project will appear
on the [expo-app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_BO&pli=1) is you are using the same network

## Building Application

There two ways to build an expo application, one is using the tool provided by expo [eas](https://expo.dev/eas) and the other one is building your application locally.

it is recommended to build the application with eas, as it
is the simpliest way to build an apk or aab archive

### Build with eas

To build your application using eas it is mandatory that eas cli tool is installed, as well aas an expo user

```bash
npm install --global eas-cli
```

```bash
eas login
```

finally to start building the application run the next command

```bash
eas build -p android --profile [development|preview|production]
```

with the above command the application will bee queue for the build to take place, if you go to your expo [account](https://expo.dev/). you may be able to see the progess of the building

### Build locally

to build the application locally make sure all the deplendecies of the projects are installed
then run the following command

```bash
npx expo build:android -t apk
```

the command above will generate an apk archive, but if you want to get an aab archive run the next command

```bash
expo build:android -t app-bundle
```

### To learn more about building an expo application go to https://docs.expo.dev/build/introduction/
