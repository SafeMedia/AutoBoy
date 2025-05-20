import { Component } from "preact";

import { getVaporBoyLogo } from "../../../vaporboyLogo";

const packageJson = require("../../../../package.json");

export default class About extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (window !== undefined && window.gtag) {
      gtag("event", "about_opened");
    }
  }

  render() {
    return (
      <div class="about">
        <h1>About</h1>
        <img src={getVaporBoyLogo()} />
        <p class="version">AutoBoy Version {packageJson.version}</p>
        <p class="version">
          <a href="https://github.com/safemedia/AutoBoy" target="_blank">
            AutoBoy
          </a>{" "}
          Version {packageJson.dependencies.wasmboy}
        </p>
        <p>
          <b>AutoBoy</b> is a Gameboy & Gameboy Color{" "}
          <a
            href="https://developers.google.com/web/progressive-web-apps/"
            target="_blank"
          >
            PWA
          </a>. AutoBoy emulates ROMs using{" "}
          <a href="https://github.com/torch2424/wasmBoy" target="_blank">
            WasmBoy
          </a>. Both AutoBoy and WasmBoy are open source under the{" "}
          <a
            href="https://choosealicense.com/licenses/apache-2.0/"
            target="_blank"
          >
            Apache License 2.0
          </a>. You can fork/contribute to utoBoy, at
          the{" "}
          <a href="https://github.com/safemedia/AutoBoy" target="_blank">
            AutoBoy Github Repo
          </a>. You can fork/contribute to WasmBoy, the Core Library written for
          Web Assembly in AssemblyScript and Demo in Preact, at the{" "}
          <a href="https://github.com/torch2424/wasmBoy" target="_blank">
            WasmBoy Github Repo
          </a>. WasmBoy was developed by{" "}
          <a href="https://aaronthedev.com" target="_blank">
            Aaron Turner
          </a>.
          <b>AutoBoy is still in beta</b>. Please expect bugs. And check the{" "}
          <b>F.A.Q</b> for where to report them.
        </p>
        <h1>Controls</h1>
        <p>This covers the controls for desktop (keyboard) and USB / Bluetooth Gamepads. Touch Controls model the original GameBoy controls.</p>
        <table>
          <tr>
            <th>Action</th>
            <th>Keyboard</th>
            <th>External GamePad</th>
          </tr>
          <tr>
            <td>GameBoy Up</td>
            <td>UpArrow / W</td>
            <td>Dpad Up / Left Analog Up</td>
          </tr>
          <tr>
            <td>GameBoy Right</td>
            <td>RightArrow / D</td>
            <td>Dpad Right / Left Analog Right</td>
          </tr>
          <tr>
            <td>GameBoy Down</td>
            <td>DownArrow / S</td>
            <td>Dpad Down / Left Analog Down</td>
          </tr>
          <tr>
            <td>GameBoy Left</td>
            <td>LeftArrow / A</td>
            <td>Dpad Left / Left Analog Left</td>
          </tr>
          <tr>
            <td>GameBoy A</td>
            <td>Z</td>
            <td>A / X</td>
          </tr>
          <tr>
            <td>GameBoy B</td>
            <td>X</td>
            <td>B / Y</td>
          </tr>
          <tr>
            <td>Play/Pause Hotkey</td>
            <td>Space</td>
            <td>Special</td>
          </tr>
          <tr>
            <td>Quick Speed Hotkey</td>
            <td>Q / U</td>
            <td>Left Trigger / Right Trigger</td>
          </tr>
        </table>
        <h1>F.A.Q</h1>
        <ul>
          <li>
            <h3>Where can I get ROMs of games?</h3>
            <p>
              You can find roms on the Autonomi network. Soon you should be able 
              to play roms directly by entering a xorname. Alternatively
              ROMs can be obtained by many open source developers in the Gameboy
              open-source community. First, I would like to suggest{" "}
              <a href="https://gbhh.avivace.com/" target="_blank">
                Homebrew Hub by avivace
              </a>. This site attempts to "collect, archive and save every
              unofficial game, homebrew, patch, hackrom for Game Boy produced by
              the community through decades of passionate work". Another good
              resource is the{" "}
              <a
                href="https://github.com/avivace/awesome-gbdev"
                target="_blank"
              >
                awesome-gbdev
              </a>{" "}
              awesome list. This contains a bunch of resources of how to develop
              on the GB/GBC platform, as well as aleady developer projects. In
              terms of commercial ROMs and games, downloading commercial ROMs is
              illegal, and frowned upon by the AutoBoy and WasmBoy authors.
              Though, depending on your contry, Dumping ROMs of cartridges you
              own, is legal. This process can be found online, by searching on
              the internet. For more information on the legality of ROMs and
              emulation, I found
              <a
                href="https://gaming.stackexchange.com/questions/239821/game-emulation-legally"
                target="_blank"
              >
                this stack exchange answer to be a good resource
              </a>.
              <b>P.S I am not a lawyer, or a legal advisor.</b>
            </p>
          </li>

          <li>
            <h3>What file types are supported by AutoBoy?</h3>
            <p>
              AutoBoy uses WasmBoy as its emulation library, thus, it supports
              the same file types as WasmBoy. As of this time of writing,
              WasmBoy supports ".gb", ".gbc", and ".zip" files that contain the
              one of the other types.
            </p>
          </li>

          <li>
            <h3>Where can I report bugs/issues or suggest features?</h3>
            <p>
              Bugs and Sugesstions can be filed at the{" "}
              <a href="https://github.com/safemedia/AutoBoy" target="_blank">
                AutoBoy Github Repo
              </a>.
            </p>
          </li>

          <li>
            <h3>What is AutoBoyBoy/WasmBoy's License?</h3>
            <p>
              Both projects are licensed under the{" "}
              <a
                href="https://choosealicense.com/licenses/apache-2.0/"
                target="_blank"
              >
                Apache License 2.0
              </a>.
            </p>
          </li>
        </ul>
        <h1>System Requirements & Performance</h1>
        <p>
          From manual testing, I've found that most laptops and desktops should
          be able to run the emulator at full speed easily. However, running
          emulators within a web browser is still a challenge for mobile
          browsers. I've found most flaship devices from 2016 and newer can tend
          to run the emulator at full speed. For instance, I've found that
          devices with a{" "}
          <a href="https://browser.geekbench.com/" target="_blank">
            Geekbench
          </a>{" "}
          single core score above 1400 have the best chance of running the
          emulator at a full 60 frames per second. For improving performance,
          check the <b>Control Panel &#10132; Configure Options &#10132; Performance</b>{" "}
          section. There you will see options for adjusting performance, with
          detailed explanations of what each option does.
        </p>
        <h1>Notable Open Source Packages & Shout Outs</h1>
        <ul>

                    <li>
            <a href="https://github.com/torch2424/vaporBoy" target="_blank">
              VaporBoy
            </a>{" "}
            - the GB/GBC client that this repo was forked from.
          </li>

          <li>
            <a href="https://github.com/torch2424/wasmBoy" target="_blank">
              WasmBoy
            </a>{" "}
            - the GB/GBC emulation core library.
          </li>

          <li>
            <a href="https://github.com/AssemblyScript" target="_blank">
              AssemblyScript
            </a>{" "}
            - Typescript to Web Assembly language.
          </li>

          <li>
            <a href="https://preactjs.com/" target="_blank">
              Preact
            </a>{" "}
            - lightweight frontend PWA JS framework.
          </li>

          <li>
            <a
              href="https://torch2424.github.io/aesthetic-css/"
              target="_blank"
            >
              A E S T H E T I C C S S
            </a>{" "}
            - Vaporwave inspired CSS framework.
          </li>

          <li>
            <a
              href="https://github.com/torch2424/responsive-gamepad"
              target="_blank"
            >
              responsive-gamepad
            </a>{" "}
            - Keyboard, Touch, and controller input library.
          </li>

          <li>
            <a href="https://leahrosegarza.com/" target="_blank">
              Leah Rose Garza
            </a>{" "}
            - For making the amazing Vaporboy logo.
          </li>

        

        </ul>

      </div>
    );
  }
}
