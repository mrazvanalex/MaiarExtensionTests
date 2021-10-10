import { Component, OnInit } from '@angular/core';
import { Address, ExtensionProvider, SignableMessage } from '@elrondnetwork/erdjs/out';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  constructor() { }

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
