import { BasicServer, auth } from 'realm-object-server'
import * as path from 'path'


const server = new BasicServer()

server.start({
        // For all the full list of configuration parameters see:
        // https://realm.io/docs/realm-object-server/latest/api/ros/interfaces/serverconfig.html

        // This is the location where ROS will store its runtime data
        dataPath: path.join(__dirname, '../data'),

        // A logger to pipe ROS information. You can also specify the log level
        // You will need to import the Logger of your choice from the `realm-object-server` module like:
        // import { FileLogger } from 'realm-object-server'
        // logger?: Logger
        // logger: new ConsoleLogger()
        // logger: new FileLogger(path.join(__dirname, '../log.txt'), 'all')

        // The address on which to listen for connections
        // address?: string = '0.0.0.0'
        // address: '0.0.0.0',

        // The port on which to listen for connections
        // port?: number = 9080
        // port: 9080,

        // Override the default list of authentication providers
        // the default has PasswordAuthProvider, AnonymousAuthProvider, and NicknameAuthProvider
        // you will need to add `import { auth, BasicServer } from 'realm-object-server'
        // authProviders?: IAuthProvider[]
        // authProviders: [new auth.PasswordAuthProvider({ autoCreateAdminUser: true }), new auth.NicknameAuthProvider(), new auth.AnonymousAuthProvider()]

        authProviders: [new auth.NicknameAuthProvider()]

        // Autogenerate public and private keys on startup
        // autoKeyGen?: boolean = true
        // autoKeyGen: true,

        // Specify an alternative path to the private key. Otherwise, it is expected to be under the data path.
        // privateKeyPath?: string
        // privateKeyPath: '',

        // Specify an alternative path to the public key. Otherwise, it is expected to be under the data path.
        // publicKeyPath?: string
        // publicKeyPath: '',

        // The desired logging threshold. Can be one of: all, trace, debug, detail, info, warn, error, fatal, off)
        // logLevel?: string = 'info'
        // logLevel: 'info',

        // Enable the HTTPS Server.
        // https?: boolean = false
        // https: true,

        // The port on which to listen for HTTPS connections.
        // httpsAddress?: string = '0.0.0.0',
        // httpsAddress: '0.0.0.0',

        // The address on which to listen for HTTPS connections.
        // httpsPort?: number = 9443
        // httpsPort: 9443,

        // The path to your HTTPS private key in PEM format. Required if HTTPS is enabled.
        // httpsKeyPath?: string
        // httpsKeyPath: '',

        // The path to your HTTPS certificate chain in PEM format. Required if HTTPS is enabled.
        // httpsCertChainPath?: string
        // httpsCertChainPath: '',

        // Specify the length of time (in seconds) in which access tokens are valid.
        // accessTokenTtl?: number = 600 (ten minutes)
        // accessTokenTtl: 600,

        // Specify the length of time (in seconds) in which refresh tokens are valid.
        // refreshTokenTtl?: number = 3153600000 (ten years)
        // refreshTokenTtl: 3153600000,

        // Enable Log Compaction to save on bandwidth
        // read more at https://docs.realm.io/platform/learn/advanced/log-compaction
        // enableLogCompaction?: boolean = true
        // enableLogCompaction: true

        // Increase or decrease the max download
        // This affects how the Log Compaction works
        // read more at https://docs.realm.io/platform/learn/advanced/log-compaction
        // maxDownloadSize?: number 16000000 (16 megabytes)
        // maxDownloadSize: 16000000
    })
    .then(() => {
        console.log(`Realm Object Server was started on ${server.address}`)
    })
    .catch(err => {
        console.error(`Error starting Realm Object Server: ${err.message}`)
    })
