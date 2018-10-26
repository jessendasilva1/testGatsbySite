import React from "react"
import { Link /*StaticQuery, graphql*/ } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (

    <div style={{ margin: `0 auto`, maxWidth: 900, padding: `0 1rem`, backgroundColor: `lightblue` }}>

        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{  }}>
                <h3 style={{ display: `inline` }}>MySweetSite</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                {/*when linking to files, specific the page file name (eg. about.js -> /about/)*/}
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
                <ListLink to="/my-files/">Site Files</ListLink>
            </ul>
        </header>

        {children}

        <footer style={{ width: "100%" }}>
            <p>I am in the footer of the page</p>
        </footer>

    </div>
    
)

/*
<StaticQuery> is an API that allows non-page components to retrieve data via graphql queries
You wrap the entire layout in this <StaticQuery> Component
*/

/*
<StaticQuery
        query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
        }
        render={data => (
            <div>
                <Link to={`/`}>
                    <h3>
                        {data.site.siteMetadata.title}
                    </h3>
                </Link>
                <Link to={`/about/`}>
                    About
                </Link>
                {children}
            </div>
        )}
    />
*/