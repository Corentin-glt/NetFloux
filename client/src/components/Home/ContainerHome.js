import React from 'react';
import { Image } from 'semantic-ui-react';
import Background from '../../images/background-image.png';

export default class ContainerHome extends React.Component {
  
  render(){
    
    return(
      <div className="ContainerHome">
        <div>
          <Image size='massive' style={{"width": "100%", "height": "100%","backgroundSize": "cover",
             "marginTop": "-1%"}} src={Background}/>
        </div>
      </div>
    )
  }
}
