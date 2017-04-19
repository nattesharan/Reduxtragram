import React from 'react';
import { Link } from 'react-router';
import { StickyContainer, Sticky } from 'react-sticky';
const Main = React.createClass({
 onStickyStateChange(isSticky) {
      console.log(`Am I sticky?: ${ isSticky ? 'Yep!' : 'Nope!'}`);
    },
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
</div>
    )
  }
});

export default Main;
