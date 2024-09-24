# tabmeoutside
**tabmeoutside** is a Chrome extension that allows you to switch between browser tabs using custom keybindings.

## Features
- ⏩ **Next Tab**: Jump to the next tab.
- ⏪ **Previous Tab**: Return to the previous tab.
- ⚙️ **Customizable**: Change keybindings through the Chrome extensions settings.

## Default Keybindings
- **Next Tab**: `alt + l`
- **Previous Tab**: `alt + h`

## How to Install
1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the folder containing the extension files.

## Customizing Keybindings
1. Open the extensions settings at `chrome://extensions/shortcuts`.
2. Find **tabmeoutside** and set your preferred keybindings for switching tabs.

## How It Works
This extension listens for key commands using the `chrome.commands` API and uses the `chrome.tabs` API to switch between open tabs in the current window. The default shortcuts can be customized to fit your browsing habits.

## Contributing
Feel free to submit issues or make pull requests if you'd like to contribute improvements or features to the project!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
