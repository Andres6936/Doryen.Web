import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
    .use(
        // This line is very important for the functioning of site, define the
        // base path in the which the resources will be acquired, the purpose
        // of this website is show the content in Github Pages, but in order to
        // deliver files to the server it is necessary to specify the base path
        // pointing to the project name, in case the base path is not present,
        // Github pages will not render anything, showing a 'not found' message.
        // However, Although this step is necessary for Github Pages, for the
        // localhost, it is a problem, since that the resources are acquired
        // from the base path '/' and not from 'Doryen.Web', this is the reason
        // for use a ternary operator.
        dev === true ? '/' : 'Doryen.Web',
        compression({threshold: 0}),
        sirv('static', {dev}),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });
