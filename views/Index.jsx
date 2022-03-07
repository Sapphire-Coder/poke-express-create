const React = require('react')
class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <h1>Here is a list of the Pokemon!</h1>
                <ul>
                    {pokemon.map((poke, i) => {
                        return (
                            <li><a href = {`/pokemon/${i}`}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</a></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index