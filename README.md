# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

# Learning

#### Release time

Controls the duration of the sound
Time it takes for the sound to fade out after the key is released

#### Hold time

The time the oscillator will be help open without our hands on the keys

#### Portamento

The amount of time it takes to glide and pitch to the next note

#### VCO Mixer

Controls the volume for the two VCO

#### Scale

Switch between octaves

#### VCO2 Pitch

#### Sustain

The level of volume while the key is pressed

#### Release

The time it takes the oscillator to fade out after the key is released

#### EGT/EXT

The envelope is now controlled with the patches if any are plugged-in.

For example, if I link the wheel to the freq patch, the EGT/EXT will control the amount of effect from the wheel.

#### Total patch

It's controlled by the MG/T.EXT knob.

For example, if I link the wheel to the total patch, it will be controlled by the MG/T.EXT knob.
