var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = function(props) {
    return (
        <div>
            <h1 className="text-center">About</h1>
                <blockquote>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    <cite>Somewhere online</cite>
                </blockquote>
                <hr />
                <div className="row">
                    <div className="columns">
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3>Why do we use it?</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <ul>
                                <li>
                                    <a href="http://www.lipsum.com">Lorem Ipsum</a> - This is where these paragraphs came from.
                                </li>
                                <li>
                                    <a href="https://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
                                </li>
                            </ul>
                            <p>Welcome to About page!</p>
                    </div>
                </div>
        </div>
    );
};

// var About = (props) => <h3>About Component</h3>

module.exports = About;
