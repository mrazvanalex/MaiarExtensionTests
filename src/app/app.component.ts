import { Component, OnInit } from '@angular/core';
import { Address, ExtensionProvider, NetworkConfig, SignableMessage } from '@elrondnetwork/erdjs/out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  
  title = 'MaiarExtensionTests';

  async ngOnInit() {
    let extProvider = ExtensionProvider.getInstance();
    await extProvider.init();
    let walletAddress = await extProvider.login();
    let address = new Address(walletAddress);
    const message = new SignableMessage({
      message: Buffer.from(walletAddress), address: address
    });
    await extProvider.signMessage(message);
  }
}
