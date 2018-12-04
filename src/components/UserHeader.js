import React from 'react' ;
import { connect }  from  'react-redux' ;
// import { fetchUser }  from '../actions';

class UserHeader extends  React.Component {

  

    render(){
        // const user = this.props.users.find(user => user.id  === this.props.userId);
        // console.log(this.props.users)
        const { user } = this.props;
        
        if(!user){
            return <div>Loading....</div>
        }

        return <div className="header"> {user.name} </div> 
    // console.log(this.props.users)
    //     return <div>Loading ...........</div>
    }
}

const mapStateToProps = (state , ownProps) =>{
    return {user : state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps ) (UserHeader) ;