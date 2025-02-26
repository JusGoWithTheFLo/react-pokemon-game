# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---

# Pokémon Love Game

This is a simple and fun Pokémon-themed game where you can capture, care for, and battle with Pokémon. The game allows you to interact with Pokémon by petting, feeding, hugging, or battling them. Each Pokémon starts with a set number of hearts that can be filled or reduced by your actions. You can encounter new Pokémon randomly and capture them to add to your collection.

## Features

- **Random Encounter**: Encounter and capture Pokémon from the first 151 Pokémon.
- **Hearts Mechanism**: Pokémon have hearts that can be filled or reduced through interactions (petting, feeding, hugging, battling).
- **Captured Pokémon List**: Keep track of your captured Pokémon and their hearts.
- **Battle and Adventure**: Battle with Pokémon or take them on adventures.
- **Pokémon Care**: Feed, pet, and hug your Pokémon to fill their hearts with love.
- **Error Handling**: Graceful handling of errors when no hearts are left or when the Pokémon is already captured.

## Technologies Used

- **React**: For building the interactive UI components and managing the application state.
- **Axios**: For making API requests to fetch Pokémon data.
- **PokeAPI**: The public API to fetch information about the first 151 Pokémon.
- **CSS**: For styling the application.

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/<your-username>/pokemon-love-game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pokemon-love-game
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

The app will be running at `http://localhost:3000` by default.

## How to Play

- **Capture Pokémon**: When a new Pokémon appears, you can choose to capture it by clicking the "Capture Pokémon" button.
- **Interact with Pokémon**: After capturing a Pokémon, you can interact with it using different actions:
  - **Pet**: Click the pet button to fill one heart.
  - **Feed**: Click the feed button to fill one heart.
  - **Hug**: Click the hug button to fill one heart.
- **Battle and Adventure**: Use the battle or adventure buttons to engage with the Pokémon, which may result in losing or gaining hearts.

### Available Buttons:
- **Capture Pokémon**: Capture the currently displayed Pokémon.
- **Pet**: Pet the Pokémon to fill one heart.
- **Feed**: Feed the Pokémon to fill one heart.
- **Hug**: Hug the Pokémon to fill one heart.
- **Battle**: Engage in a battle to decrease one heart.
- **Adventure**: Take the Pokémon on an adventure with a random chance of encountering a new Pokémon.

## Components Overview

- **App**: The main component that manages the state and renders the game interface.
- **LovePokemon**: Handles the interaction with the shown Pokémon, including the hearts and capturing mechanism.
- **CapturedPokemonList**: Displays the list of Pokémon you have captured and allows you to select them for further interaction.
- **Heart**: A component that displays a single heart, used to indicate the Pokémon's affection.
- **LovedPokemon**: Displays the currently selected Pokémon and its sprite.

## Development

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Open a pull request.

## Known Issues

- The game is based on the first 151 Pokémon only. Future updates might include additional Pokémon.
- Pokémon sprites and data are fetched asynchronously, so there may be a slight delay while loading.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is a fan-made game and is not affiliated with, endorsed by, or sponsored by Nintendo or The Pokémon Company. All rights to Pokémon, including the characters, names, and other related elements, belong to their respective owners. This project is created solely for educational purposes and as a personal learning experience.

---