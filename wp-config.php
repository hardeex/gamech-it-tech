<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gamech' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'Adewale@2022' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4a,)d;U]W#1|%#XIX%8%^NlD:{+oqi##kcn[]w.KWy6Q2qK,w2Y{FfC,wm2[Bumn' );
define( 'SECURE_AUTH_KEY',  'L4@[inwbgF-#S6^c<R~<Kr8VqWw[i,qZnKbu0l6[e$cI%e0IpfUvdi71M9NhH~5r' );
define( 'LOGGED_IN_KEY',    '3- `G 7vJ#W=Y0c&<)N1tjY-GF6h{tSYt&JI_a#foyqezQP<PlO4Nu/v&0VSXhPG' );
define( 'NONCE_KEY',        '3=AqU,BPq<S-O_wo.A0!:%9>#Qx=qagtYu2|YD%0XE~xT|v/LN0W4?EH{6jEf~2N' );
define( 'AUTH_SALT',        'CBDqWdVUmC/?8z!N#+vt8`j]8~C?J]*/Tz{|rtXri{]Di8gq|yt|Pz9DjsnQ$L@A' );
define( 'SECURE_AUTH_SALT', 'PHGrm3E+mZo~[t_P=s>g]}qHCna>w-^}-0!lSH2IdCP]f@[R,?_WO4`,+$vzqzGN' );
define( 'LOGGED_IN_SALT',   'TGA7s_rKvaKC$7 ;jw4SB;HVFiV|DzUXbp-l-4:Cy/)ywj+e]/On]miu>T|;KL]G' );
define( 'NONCE_SALT',       '&.;DCK#sAh*j24J9n]o7D*e)/px~0wD/w7EH0g|X/2e$1j4SUz=pAHJnER&I1kI_' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
