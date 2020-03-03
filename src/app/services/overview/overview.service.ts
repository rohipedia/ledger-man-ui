import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  private passages: string[] = [
    `Sprint Corporation is an American telecommunications company that provides wireless services and is an` + 
    `internet service provider, based in Overland Park, Kansas.`,
    `It is the fourth-largest mobile network operator in the United States and serves 54.5 million customers as ` + 
    `of March 2019. The company also offers wireless voice, messaging, and broadband services through its various ` +
    `subsidiaries under the Assurance Wireless, Boost Mobile, and Virgin Mobile, brands, and wholesale access ` + 
    `to its wireless networks to mobile virtual network operators.`,
    `In July 2013, a majority of the company was purchased by the Japanese telecommunications company ` + 
    `SoftBank Group Corp., although the remaining shares of the company continue to trade on ` + 
    `the New York Stock Exchange. Sprint uses CDMA, EvDO, 4G LTE, and 5G NR networks.` + 
    `Sprint is incorporated in Kansas.`,
    `Sprint traces its origins to the Brown Telephone Company, which was founded in 1899 to bring telephone` + 
    `service to the rural area around Abilene, Kansas. In 2006, Sprint left the local landline telephone ` +
    `business and spun those assets off into a new company named Embarq, which later became a part of ` +
    `CenturyLink, which remains one of the largest long-distance providers in the United States.`,
    `Until 2005, the company was also known as the Sprint Corporation, but took the name Sprint Nextel Corporation` +
    `when it` +
    `merged with Nextel Communications and adopted its black and yellow color scheme, along with a new logo. In 2013,` +
    `following the shutdown of the Nextel network and concurrent with the acquisition by SoftBank, the company` +
    `resumed using` +
    `the name Sprint Corporation. In July 2013, as part of the SoftBank transactions, Sprint acquired the remaining` +
    `shares of` +
    `the wireless broadband carrier Clearwire Corporation which it did not already own.`,
    `In August 2014, CEO Dan Hesse was replaced by Marcelo Claure. In May 2018, Michel Combes replaced Claure. ` +
    `Claure is now the executive chairman of Sprint, working to get Sprint's planned merger with its rival T-Mobile through ` +
    `regulatory proceedings.`
  ];

  constructor() { }

  getPassages(): string[] {
    return this.passages;
  }

  updatePassage(index: number, text: string): void {
    this.passages[index] = text;
  }
}
