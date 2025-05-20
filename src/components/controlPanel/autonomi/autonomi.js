import { Component } from "preact";
import { WasmBoy } from "wasmboy";

import { Pubx } from "../../../services/pubx";
import { PUBX_CONFIG } from "../../../pubx.config";

import { NOTIFICATION_MESSAGES } from "../../../notification.messages";

import Cartridge from "../cartridge/cartridge";



export default class Autonomi extends Component {
  constructor() {
    super();
    this.setState({});
  }

  componentDidMount() {
    this.setState({
      controlPanel: {
        ...Pubx.get(PUBX_CONFIG.CONTROL_PANEL_KEY)
      }
    });
  }

  loadROM(availableGame) {
    const loadAutonomiTask = async () => {
      await WasmBoy.pause();
      await WasmBoy.loadROM(availableGame.ROMPath);
      await WasmBoy.play();

      Pubx.get(PUBX_CONFIG.NOTIFICATION_KEY).showNotification(
        NOTIFICATION_MESSAGES.LOAD_ROM
      );
      this.state.controlPanel.hideControlPanel();

      if (window !== undefined && window.gtag) {
        gtag("event", "autonomi_load");
      }
    };

    const loadAutonomiPromise = loadAutonomiTask();
    loadAutonomiPromise.catch(error => {
      console.error(error);
      Pubx.get(PUBX_CONFIG.NOTIFICATION_KEY).showNotification(
        NOTIFICATION_MESSAGES.ERROR_LOAD_ROM
      );
    });
    Pubx.get(PUBX_CONFIG.LOADING_KEY).addPromiseToStack(loadAutonomiPromise);
  }

  showAutonomiInfo(game) {
    Pubx.get(PUBX_CONFIG.CONFIRMATION_MODAL_KEY).showConfirmationModal({
      title: `Autonomi Info - ${game.title}`,
      contentElement: game.infoElement
    });
  }

  render() {
    let autonomiROMs = [];
    AVAILABLE_GAMES.forEach(game => {
      autonomiROMs.push(
        <li class="ROM-list__item" aria-label={game.title}>
          <div class="ROM-list__item__cartridge">
            <Cartridge
              imageUrl={game.imagePath}
              onClick={() => {
                this.loadROM(game);
              }}
              ariaLabel={game.title}
            />
          </div>
          <div class="ROM-list__item__label">{game.title}</div>
          <div class="ROM-list__item__list-button">
            <button
              class="list-button--info"
              onClick={() => this.showAutonomiInfo(game)}
              aria-label={`Information about ${game.title}`}
            >
              i
            </button>
          </div>
        </li>
      );
    });

    return (
      <div>
        <ul class="ROM-list">{autonomiROMs}</ul>
      </div>
    );
  }
}
