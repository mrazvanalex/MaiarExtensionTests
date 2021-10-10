import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Address, ExtensionProvider, NetworkConfig, SignableMessage } from '@elrondnetwork/erdjs/out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent{
  
  title = 'MaiarExtensionTests';
}
