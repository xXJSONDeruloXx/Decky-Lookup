Collecting workspace information

Here's a README explaining the features of the Decky Lookup plugin:

# Decky Lookup

A [Decky](https://github.com/SteamDeckHomebrew/decky-loader) plugin that provides quick access to useful websites for your currently running Steam game.

## Features

- One-click access to popular gaming resources
- Automatically searches using current game name/ID
- Falls back to homepage if no game is running
- Supported sites:

### Game Information
- **Google Search** - Quick web search for the current game
- **PC Gaming Wiki** - Technical information, fixes and tweaks
- **ProtonDB** - Linux/Steam Deck compatibility reports
- **HowLongToBeat** - Game completion time estimates
- **Steam Deck HQ** - Steam Deck optimization guides
- **GameFAQs** - Walkthroughs and guides

## Usage

1. Install through the Decky plugin dev settings zip installer
2. While in a game, access the Quick Access menu (... button)
3. Select the Decky Lookup panel
4. Click any button to search/view that resource for your current game
5. The site will open in a browser window

## Technical Details

Built with:
- React + TypeScript frontend using @decky/ui components
- BSD-3-Clause license

## Credits

Based on the [Decky Plugin Template](https://github.com/SteamDeckHomebrew/decky-plugin-template)