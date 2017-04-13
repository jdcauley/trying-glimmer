import Component, { tracked } from "@glimmer/component";

export default class ClientGlimmer extends Component {

  brewery: any;

  constructor(options) {
    super(options);
    this.loadBrewery();
  }

  async function loadBrewery() {
    let request = await fetch('https://app.beerncapp.com/api/v1/breweries/100');
    let json = await request.json();
    console.log(json)
    this.brewery = json.brewery;
  }

}
