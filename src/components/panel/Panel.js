import React from 'react';
import './Panel.css'
import {node} from 'prop-types'

Panel.propTypes = {
  /** The nodes to pass into the panel tag */
  children: node.isRequired,
}

function Panel ({children}) {
    return(
        <section className="Panel">
            {children}
        </section>
    );
};

export default Panel;