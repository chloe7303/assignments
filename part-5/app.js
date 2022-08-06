class Header extends React.Component {
  state = {
    showMenu: false
  }

  toggelMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }

  render() {
    return (
      <header>
        <nav className="navbar">
          <a className="navbar-brand" href="#">Website Title / Logo</a>
          <NavbarList number={4} />
          <NavbarList number={4} display={this.state.showMenu ? 'block' : 'none'} toggelMenu={this.toggelMenu} />
          <div id="navbar-icon" className="navbar-icon" onClick={this.toggelMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>
    )
  }
}

function NavbarList(props) {
  const createListItem = (number) => {
    const array = [];
    for (let i = 1; i <= number; i++) {
      array.push(<li key={i.toString()} className="navbar-list-item">Item {i}</li>)
    }
    return array
  }

  return (
    <ul className="navbar-list" style={{ display: props.display }}>
      <div className="close-button" style={{ display: props.display }} onClick={props.toggelMenu}>X</div>
      {createListItem(props.number)}
    </ul>
  )
}

class Main extends React.Component {
  state = {
    text: 'Welcome Message',
    showMoreBox: false
  };

  changeText = () => {
    this.setState({
      text: 'Have a Good Time!'
    })
  }

  showMoreBox = () => {
    this.setState(prevState => ({
      showMoreBox: !prevState.showMoreBox
    }))
  }

  render() {
    return (
      <main>
        <section id="section-welcome" className="section-welcome" onClick={this.changeText}>
          <h1 className="section-welcome-title">{this.state.text}</h1>
        </section>

        <section className="section-content">
          <h3 className="section-content-title">Section Title</h3>
          <ContentBox number={{ start: 1, end: 4 }} />

          <div className="button-cta-container">
            <a id="button-cta" className="button-cta" onClick={this.showMoreBox}>Call to Action</a>
          </div>

          {this.state.showMoreBox ? <ContentBox number={{ start: 5, end: 8 }} /> : null}
        </section>
      </main>
    )
  }
}

function ContentBox(props) {
  const createContentBox = (start, end) => {
    const array = [];
    for (let i = start; i <= end; i++) {
      array.push(<article key={i.toString()} className="section-content-box">
        <h5 className="section-content-box-title">Content Box {i}</h5>
      </article>)
    }
    return array
  }

  const { start, end } = props.number
  return (
    <div className="section-content-box-container">
      {createContentBox(start, end)}
    </div>
  )
}

function MyApp() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
