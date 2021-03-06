import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Directory extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCampsite: null
        }
    }

    onCampsiteSelect(campsite) { //changes the selectedCampsite in the state to campsite
        this.setState({selectedCampsite: campsite})
    } //never update the state directly in React

    renderSelectedCampsite(campsite) {
        if(campsite){
            return(
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardBody>{campsite.description}
                    </CardBody>
                </Card>
            )
        }
    }

    render(){
        const directory = this.props.campsites.map(campsite => {
            return(
                <div key={campsite.id}className='col-md-5 m-1'> {/* having a unique key for each element is best practice for react when rendering an array of elements*/}
                <Card onClick={() => this.onCampsiteSelect(campsite)}>
                    <CardImg width='100%' src={campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                    
                </Card>
                </div>
            )
        });
    
        return(
            <div className='container'>
                <div className='row'>
                    {directory}
                </div>
                <div className='row'>
                    <div className='col-md-5 m-1'>
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>
            </div>
        );
    };
}
    

export default Directory;