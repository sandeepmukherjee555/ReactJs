import { Component } from 'react';
// const ProfileComponent = () => {
//   return (
//     <div>
//       <h1>Name : Sandeep Mukherjee</h1>
//     </div>
//   );
// };

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
    console.log('Profile- Constructor');
  }

  async componentDidMount() {
    console.log('Profile - Component Did Mount');
    const data = await fetch('https://api.github.com/users/sandeepmukherjee13');
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json
    });
  }
  render() {
    const { login, company, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h3>Name :{this.props.name}</h3>
        <h3>UserName : {login}</h3>
        <h3>Company : {company}</h3>
      </div>
    );
  }
}
export default ProfileComponent;
