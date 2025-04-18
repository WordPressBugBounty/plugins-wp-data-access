<?php

/**
 * Suppress "error - 0 - No summary was found for this file" on phpdoc generation
 *
 * @package plugin\public
 */
use WPDataAccess\API\WPDA_API;
use WPDataAccess\Data_Dictionary\WPDA_Dictionary_Exist;
use WPDataAccess\Data_Tables\WPDA_Data_Tables;
use WPDataAccess\List_Table\WPDA_List_View;
use WPDataAccess\Premium\WPDAPRO_Data_Publisher\WPDAPRO_Data_Publisher_Init;
use WPDataAccess\Utilities\WPDA_Add_App_To_Menu;
use WPDataAccess\WPDA;
/**
 * Class WP_Data_Access_Public
 *
 * Defines public specific functionality for plugin WP Data Access.
 *
 * @author  Peter Schulz
 * @since   1.0.0
 */
class WP_Data_Access_Public {
    /**
     * Add stylesheets to front-end
     *
     * The following stylesheets are registered:
     * + jQuery DataTables stylesheet (version is set in class WPDA)
     * + jQuery DataTables responsive stylesheet (version is set in class WPDA)
     *
     * Stylesheets are used to style the front-end tables. Whether stylesheets should be loaded or not can be set in
     * the front-end settings (menu: Manage Plugin). Sites that already have some of these stylesheets loaded, can turn
     * off loading in the front-end settings to prevent double loading.
     *
     * @since   1.0.0
     *
     * @see WPDA
     */
    public function enqueue_styles() {
        if ( is_admin() ) {
            // Public styles are only added to public pages.
            return;
        }
        // WPDataAccess apps CSS.
        wp_register_style(
            'wpda_apps',
            plugins_url( '../assets/css/wpda_apps.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        // Toolbar icon.
        wp_enqueue_style(
            'wpda_wpdp_public',
            plugins_url( '../assets/css/wpda_public.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        // Register JQuery DataTables.
        wp_register_style(
            'jquery_datatables',
            plugins_url( '../assets/css/jquery.dataTables.min.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        // Register JQuery DataTables Responsive.
        wp_register_style(
            'jquery_datatables_responsive',
            plugins_url( '../assets/css/responsive.dataTables.min.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        // Register styles for WPDADIEHARD shortcode.
        global $wp_version;
        wp_register_style(
            'wpdadiehard',
            '/wp-admin/load-styles.php?load%5B%5D=list-tables,forms,common,buttons',
            array(),
            $wp_version
        );
        wp_register_style(
            'wpdataaccess',
            plugins_url( '../assets/css/wpda_style.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        wp_register_style(
            'wpdataprojects',
            plugins_url( '../WPDataProjects/assets/css/wpdp_style.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        // Register datetimepicker external library.
        wp_register_style(
            'datetimepicker',
            plugins_url( '../assets/css/jquery.datetimepicker.min.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        wp_register_style(
            'wpda_datatables_default',
            plugins_url( '../assets/css/wpda_datatables_default.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        wp_register_style(
            'wpda_datatables_hide_sort_icons',
            plugins_url( '../assets/css/wpda_datatables_hide_sort_icons.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        // SAVING SPACE - According to the plugin guidelines it is allowed to include external fonts:
        // https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/#8-plugins-may-not-send-executable-code-via-third-party-systems .
        // Load fontawesome icons.
        wp_register_style(
            // phpcs:ignore WordPress.WP.EnqueuedResourceParameters
            'wpda_fontawesome_icons',
            WPDA::CDN_FONTAWESOME . 'all.min.css',
            array(),
            null,
            false
        );
    }

    /**
     * Add scripts to back-end
     *
     * The following script files are registered :
     * + jQuery DataTables (version is set in class WPDA)
     * + jQuery DataTables responsive (version is set in class WPDA)
     * + WP Data Access DataTables server implementation (ajax)
     *
     * Scripts are used to build front-end tables and support searching and pagination. Whether the scripts for
     * jQuery DataTables and/or jQuery DataTables responsive should be loaded or not can be set in the
     * front-end settings (menu: Manage Plugin). Sites that already have some of these script files loaded, can
     * turn off loading in the front-end settings to prevent double loading.
     *
     * @since   1.0.0
     *
     * @see WPDA
     */
    public function enqueue_scripts() {
        if ( is_admin() ) {
            // Public scripts are only added to public pages.
            return;
        }
        wp_enqueue_script( 'jquery' );
        // Register wpda rest api.
        wp_enqueue_script(
            'wpda_rest_api',
            plugins_url( '../assets/js/wpda_rest_api.js', __FILE__ ),
            array('wp-api'),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION ),
            false
        );
        wp_localize_script( 'wpda_rest_api', 'wpdaApiSettings', array(
            'path' => WPDA_API::WPDA_NAMESPACE,
        ) );
        // Register JQuery DataTables.
        wp_register_script(
            'jquery_datatables',
            plugins_url( '../assets/js/jquery.dataTables.min.js', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION ),
            false
        );
        // Register JQuery DataTables Responsive.
        wp_register_script(
            'jquery_datatables_responsive',
            plugins_url( '../assets/js/dataTables.responsive.min.js', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION ),
            false
        );
        // Add url Ajax call to WPDA datatables.
        wp_register_script(
            'wpda_datatables',
            plugins_url( '../assets/js/wpda_datatables.js', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION ),
            false
        );
        wp_localize_script( 'wpda_datatables', 'wpda_publication_vars', array(
            'wpda_ajaxurl' => admin_url( 'admin-ajax.php' ),
        ) );
        // Register functions for WPDADIEHARD shortcode.
        global $wp_version;
        wp_register_script(
            'wpdadiehard',
            '/wp-admin/load-scripts.php?load%5B%5D=hoverIntent,hoverintent-js,list-tables,forms,buttons,common',
            array('wp-i18n'),
            $wp_version,
            false
        );
        wp_register_script(
            'wpda_admin_scripts',
            plugins_url( '../assets/js/wpda_admin.js', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION ),
            false
        );
        // Add WP Data Projects JS functions.
        wp_register_script(
            'wpdataprojects',
            plugins_url( '../WPDataProjects/assets/js/wpdp_admin.js', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION ),
            false
        );
        // Register datetimepicker external library.
        wp_register_script(
            'datetimepicker',
            plugins_url( '../assets/js/jquery.datetimepicker.full.min.js', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION ),
            false
        );
        // Register notify external library.
        wp_register_script(
            'wpda_notify',
            plugins_url( '../assets/js/notify.min.js', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION ),
            false
        );
    }

    public function add_apps_to_admin_toolbar() {
        if ( is_admin() ) {
            // Toolbar only available on public pages.
            return;
        }
        // Add Apps.
        $apps = new WPDA_Add_App_To_Menu();
        $apps->add_apps_to_menu();
    }

    /**
     * Show projects in admin toolbar
     *
     * @return void
     */
    public function add_data_projects_to_admin_toolbar() {
        if ( is_admin() ) {
            // Toolbar only available on public pages.
            return;
        }
        // Add Data Projects.
        $wpdp = new \WPDataProjects\WPDP();
        $wpdp->add_projects();
    }

    /**
     * Register shortcode 'wpdataaccess'
     *
     * @since   1.0.0
     */
    public function register_shortcodes() {
        add_shortcode( 'wpda_app_builder', array($this, 'wpda_app_builder') );
        add_shortcode( 'wpda_app', array($this, 'wpda_app') );
        add_shortcode( 'wpda_data_explorer', array($this, 'wpda_data_explorer') );
        add_shortcode( 'wpda_query_builder', array($this, 'wpda_query_builder') );
        add_shortcode( 'wpdataaccess', array($this, 'wpdataaccess') );
        add_shortcode( 'wpdadiehard', array($this, 'wpdadiehard') );
    }

    public function wpda_app_builder( $atts ) {
        $editing = WPDA::is_editing_post();
        if ( false !== $editing ) {
            // Prevent errors when user is editing a post.
            return $editing;
        }
        $atts = array_change_key_case( (array) $atts, CASE_LOWER );
        //phpcs:ignore - 8.1 proof
        $wp_atts = shortcode_atts( array(
            'feedback' => false,
        ), $atts );
        ob_start();
        $apps = new WPDataAccess\Data_Apps\WPDA_App_Builder($wp_atts);
        $apps->show();
        return ob_get_clean();
    }

    public function wpda_app( $atts ) {
        $editing = WPDA::is_editing_post();
        if ( false !== $editing ) {
            // Prevent errors when user is editing a post.
            return $editing;
        }
        if ( isset( $_POST['is_fb_preview'], $_GET['et_pb_preview'] ) && 'true' === $_POST['is_fb_preview'] && 'true' === $_GET['et_pb_preview'] ) {
            // Divi Visual Builder preview not working!
            // Styles are not properly loaded into the Divi Visual Builder.
            ob_start();
            ?>
			<div style="width: 100%; border: 1px solid #ccc; padding: 50px; display: grid; gap: 20px; background-color: rgb(249,249,249); border-radius: 5px;">
				<div>
					No preview in Visual Builder. App will appear once Visual Builder is closed.
				</div>
			</div>
			<?php 
            return ob_get_clean();
        }
        $atts = array_change_key_case( (array) $atts, CASE_LOWER );
        //phpcs:ignore - 8.1 proof
        $wp_atts = shortcode_atts( array(
            'app_id'             => null,
            'feedback'           => false,
            'builders'           => true,
            'hidetitlebar'       => false,
            'fullscreen'         => false,
            'filter_field_name'  => null,
            'filter_field_value' => null,
        ), $atts );
        $shortcode_params = array();
        foreach ( $atts as $key => $value ) {
            if ( !key_exists( $key, $wp_atts ) ) {
                $shortcode_params[$key] = $value;
            }
        }
        ob_start();
        $app = new WPDataAccess\Data_Apps\WPDA_App_Container($wp_atts, $shortcode_params);
        $app->show();
        return ob_get_clean();
    }

    public function wpda_data_explorer( $atts ) {
        $editing = WPDA::is_editing_post();
        if ( false !== $editing ) {
            // Prevent errors when user is editing a post.
            return $editing;
        }
        $atts = array_change_key_case( (array) $atts, CASE_LOWER );
        //phpcs:ignore - 8.1 proof
        $wp_atts = shortcode_atts( array(
            'feedback' => false,
        ), $atts );
        ob_start();
        $explorer = new WPDataAccess\Data_Apps\WPDA_Data_Explorer($wp_atts);
        $explorer->show();
        return ob_get_clean();
    }

    public function wpda_query_builder( $atts ) {
        $editing = WPDA::is_editing_post();
        if ( false !== $editing ) {
            // Prevent errors when user is editing a post.
            return $editing;
        }
        $atts = array_change_key_case( (array) $atts, CASE_LOWER );
        //phpcs:ignore - 8.1 proof
        $wp_atts = shortcode_atts( array(
            'feedback' => false,
        ), $atts );
        ob_start();
        $qb = new WPDataAccess\Data_Apps\WPDA_Query_Builder($wp_atts);
        $qb->show();
        return ob_get_clean();
    }

    /**
     * Implementation of shortcode 'wpdataaccess'
     *
     * Checks the values entered on validity (as far as possible) and builds the table based on the given table name,
     * column names and other arguments. Tables is build with class {@see WPDA_Data_Tables}.
     *
     * @param array $atts Arguments applied with the shortcode.
     *
     * @return string response
     *
     * @see WPDA_Data_Tables
     *
     * @since   1.0.0
     */
    public function wpdataaccess( $atts ) {
        $editing = WPDA::is_editing_post();
        if ( false !== $editing ) {
            // Prevent errors when user is editing a post.
            return $editing;
        }
        if ( 'on' !== WPDA::get_option( WPDA::OPTION_PLUGIN_WPDATAACCESS_POST ) ) {
            if ( WPDA::is_post() ) {
                return '<p>' . __( 'Sorry, you cannot use shortcode wpdataaccess in a post!', 'wp-data-access' ) . '</p>';
            }
        }
        if ( 'on' !== WPDA::get_option( WPDA::OPTION_PLUGIN_WPDATAACCESS_PAGE ) ) {
            if ( WPDA::is_page() ) {
                return '<p>' . __( 'Sorry, you cannot use shortcode wpdataaccess in a page!', 'wp-data-access' ) . '</p>';
            }
        }
        $atts = array_change_key_case( (array) $atts, CASE_LOWER );
        //phpcs:ignore - 8.1 proof
        $wp_atts = shortcode_atts( array(
            'pub_id'             => '',
            'pub_name'           => '',
            'database'           => '',
            'table'              => '',
            'columns'            => '*',
            'responsive'         => 'no',
            'responsive_cols'    => '0',
            'responsive_type'    => 'collapsed',
            'responsive_icon'    => 'yes',
            'sql_orderby'        => '',
            'filter_field_name'  => '',
            'filter_field_value' => '',
            'nl2br'              => '',
        ), $atts );
        $wpda_data_tables = new WPDA_Data_Tables();
        return $wpda_data_tables->show(
            $wp_atts['pub_id'],
            $wp_atts['pub_name'],
            $wp_atts['database'],
            $wp_atts['table'],
            str_replace( ' ', '', $wp_atts['columns'] ),
            $wp_atts['responsive'],
            $wp_atts['responsive_cols'],
            $wp_atts['responsive_type'],
            $wp_atts['responsive_icon'],
            $wp_atts['sql_orderby'],
            $wp_atts['filter_field_name'],
            $wp_atts['filter_field_value'],
            $wp_atts['nl2br']
        );
    }

    /**
     * Show data administration page on web page
     *
     * Allows to show Data Projects pages on web p0ages as well.
     *
     * @param array $atts Shortcode arguments.
     *
     * @return false|string
     */
    public function wpdadiehard( $atts ) {
        $editing = WPDA::is_editing_post();
        if ( false !== $editing ) {
            // Prevent errors when user is editing a post.
            return $editing;
        }
        if ( 'on' !== WPDA::get_option( WPDA::OPTION_PLUGIN_WPDADIEHARD_POST ) ) {
            if ( WPDA::is_post() ) {
                return '<p>' . __( 'Sorry, you cannot use shortcode wpdadiehard in a post!', 'wp-data-access' ) . '</p>';
            }
        }
        if ( 'on' !== WPDA::get_option( WPDA::OPTION_PLUGIN_WPDADIEHARD_PAGE ) ) {
            if ( WPDA::is_page() ) {
                return '<p>' . __( 'Sorry, you cannot use shortcode wpdadiehard in a page!', 'wp-data-access' ) . '</p>';
            }
        }
        global $wpdb;
        $atts = array_change_key_case( (array) $atts, CASE_LOWER );
        //phpcs:ignore - 8.1 proof
        $wp_atts = shortcode_atts( array(
            'project_id'           => '',
            'page_id'              => '',
            'schema_name'          => $wpdb->dbname,
            'table_name'           => '',
            'title'                => '',
            'subtitle'             => '',
            'bulk_actions_enabled' => false,
            'search_box_enabled'   => false,
            'bulk_export_enabled'  => false,
            'show_view_link'       => 'on',
            'allow_insert'         => 'off',
            'allow_update'         => 'off',
            'allow_delete'         => 'off',
            'allow_import'         => 'off',
        ), $atts );
        if ( '' === $wp_atts['project_id'] && '' === $wp_atts['page_id'] && '' === $wp_atts['table_name'] ) {
            // Either a Data Project page (project_id and page_id) or a table name must be provided.
            return __( 'ERROR: Missing argument(s) [(project_id and page_id) or table_name]', 'wp-data-access' );
        }
        // Sanitize database values.
        $wp_atts['project_id'] = sanitize_text_field( wp_unslash( $wp_atts['project_id'] ) );
        // input var okay.
        $wp_atts['page_id'] = sanitize_text_field( wp_unslash( $wp_atts['page_id'] ) );
        // input var okay.
        $wp_atts['schema_name'] = sanitize_text_field( wp_unslash( $wp_atts['schema_name'] ) );
        // input var okay.
        $wp_atts['table_name'] = sanitize_text_field( wp_unslash( $wp_atts['table_name'] ) );
        // input var okay.
        // Set default parameter values.
        $bulk_actions_enabled = false;
        $search_box_enabled = false;
        $bulk_export_enabled = false;
        $show_view_link = 'on';
        $allow_insert = 'off';
        $allow_update = 'off';
        $allow_delete = 'off';
        $allow_import = 'off';
        // Check arguments.
        if ( 'true' === $wp_atts['bulk_actions_enabled'] ) {
            $bulk_actions_enabled = true;
        }
        if ( 'true' === $wp_atts['search_box_enabled'] ) {
            $search_box_enabled = true;
        }
        if ( 'true' === $wp_atts['bulk_export_enabled'] ) {
            $bulk_export_enabled = true;
        }
        if ( 'false' === $wp_atts['show_view_link'] ) {
            $show_view_link = 'off';
        }
        if ( 'true' === $wp_atts['allow_insert'] ) {
            $allow_insert = 'on';
        }
        if ( 'true' === $wp_atts['allow_update'] ) {
            $allow_update = 'on';
        }
        if ( 'true' === $wp_atts['allow_delete'] ) {
            $allow_delete = 'on';
        }
        if ( 'true' === $wp_atts['allow_import'] ) {
            $allow_import = 'on';
        }
        $default_where = '';
        if ( isset( $atts['filter_field_name'] ) && isset( $atts['filter_field_value'] ) ) {
            $filter_field_name = str_replace( '`', '', sanitize_text_field( wp_unslash( $atts['filter_field_name'] ) ) );
            // input var okay.
            $filter_field_value = sanitize_text_field( wp_unslash( $atts['filter_field_value'] ) );
            // input var okay.
            $filter_field_name_array = array_map( 'trim', explode( ',', $filter_field_name ) );
            //phpcs:ignore - 8.1 proof
            $filter_field_value_array = array_map( 'trim', explode( ',', $filter_field_value ) );
            //phpcs:ignore - 8.1 proof
            if ( count( $filter_field_name_array ) === count( $filter_field_value_array ) ) {
                //phpcs:ignore - 8.1 proof
                // Add filter to where clause.
                for ($i = 0; $i < count( $filter_field_name_array ); $i++) {
                    // phpcs:ignore Generic.CodeAnalysis.ForLoopWithTestFunctionCall, Squiz.PHP.DisallowSizeFunctionsInLoops
                    $default_where .= (( '' === $default_where ? '' : ' and ' )) . $wpdb->prepare( 
                        ' `%1s` like %s ',
                        // phpcs:ignore WordPress.DB.PreparedSQLPlaceholders
                        array(WPDA::remove_backticks( $filter_field_name_array[$i] ), $filter_field_value_array[$i])
                     );
                }
            }
        }
        // Is this a Data Projects page or a table administration page?
        if ( '' !== $wp_atts['project_id'] && '' !== $wp_atts['page_id'] ) {
            // phpcs:ignore Generic.CodeAnalysis.EmptyStatement
            // Request for Data Projects page (check is performed in WPDP_List_Page).
        } else {
            // Request for table administration page.
            // Check schema name.
            if ( 'sys' === $wp_atts['schema_name'] || 'mysql' === $wp_atts['schema_name'] || 'information_schema' === $wp_atts['schema_name'] ) {
                // No access to MySQL databases (meta data)!
                return __( 'ERROR: No access to MySQL meta data', 'wp-data-access' );
            }
            // Check database table name.
            if ( '' === $wp_atts['table_name'] ) {
                // Table name must be provided! No database administration in the public area!
                return __( 'ERROR: Missing argument [table_name]', 'wp-data-access' );
            }
            // Check if table exists (to prevent sql injection) and access is granted.
            $wpda_dictionary_checks = new WPDA_Dictionary_Exist($wp_atts['schema_name'], $wp_atts['table_name']);
            if ( !$wpda_dictionary_checks->table_exists( true, false ) ) {
                // Table not found.
                return '<p>' . __( 'ERROR: Invalid table name or not authorized', 'wp-data-access' ) . '</p>';
            }
        }
        // Make sure user has access to necessary (fake) classes and functions in the frontend.
        require_once plugin_dir_path( __DIR__ ) . 'wp-data-access-diehard.php';
        // Make sure all style and JS is available.
        wp_enqueue_script( 'wpda_admin_scripts' );
        wp_enqueue_script( 'wpdataprojects' );
        wp_enqueue_script( 'wpdadiehard' );
        wp_enqueue_script( 'jquery-ui-core' );
        wp_enqueue_script( 'jquery-ui-dialog' );
        wp_enqueue_script( 'jquery-ui-tabs' );
        wp_enqueue_script( 'jquery-ui-sortable' );
        wp_enqueue_script( 'jquery-ui-tooltip' );
        wp_enqueue_script( 'jquery-ui-autocomplete' );
        wp_enqueue_style( 'dashicons' );
        wp_enqueue_style( 'wpdadiehard' );
        wp_enqueue_style( 'wpdataaccess' );
        wp_enqueue_style( 'wpdataprojects' );
        wp_enqueue_style( 'wpda_notify' );
        wp_enqueue_style(
            'wpda_ui_darkness',
            plugins_url( '../assets/css/jquery-ui.min.css', __FILE__ ),
            array(),
            WPDA::get_option( WPDA::OPTION_WPDA_VERSION )
        );
        wp_enqueue_media();
        do_action( 'wpda_wpdadiehard_prepare' );
        ob_start();
        // Set page argument to allow public access.
        $_REQUEST['page'] = 'diehard';
        if ( '' !== $wp_atts['project_id'] && '' !== $wp_atts['page_id'] ) {
            // Show Data Projects page (check is performed in WPDP_List_Page).
            // Get page values.
            $project_page = $wpdb->get_results( $wpdb->prepare( "\n                    select * from {$wpdb->prefix}wpda_project_page\n                    where project_id = %d\n                      and page_id    = %d\n                \t", array($wp_atts['project_id'], $wp_atts['page_id']) ), 'ARRAY_A' );
            // db call ok; no-cache ok.
            if ( 0 === $wpdb->num_rows ) {
                // This should never happen as it was already tested before.
                return __( 'ERROR: Data Project page not found [need a valid project_id and page_id]', 'wp-data-access' );
            }
            if ( 'off' !== WPDA::get_option( WPDA::OPTION_WPDA_USE_ROLES_IN_SHORTCODE ) ) {
                // Check if user has role.
                $user_roles = WPDA::get_current_user_roles();
                if ( false === $user_roles ) {
                    // Cannot determine the user role(s). Not able to show project menus.
                    return __( 'ERROR: No access [could not determine user role]', 'wp-data-access' );
                }
                $user_has_role = false;
                if ( '' === $project_page[0]['page_role'] || null === $project_page[0]['page_role'] ) {
                    $user_has_role = in_array( 'administrator', $user_roles, true );
                    //phpcs:ignore - 8.1 proof
                } else {
                    $user_role_array = explode( ',', $project_page[0]['page_role'] );
                    //phpcs:ignore - 8.1 proof
                    foreach ( $user_role_array as $user_role_array_item ) {
                        $user_has_role = in_array( $user_role_array_item, $user_roles, true );
                        //phpcs:ignore - 8.1 proof
                        if ( $user_has_role ) {
                            break;
                        }
                    }
                }
                if ( !$user_has_role ) {
                    return __( 'ERROR: No access [missing role]', 'wp-data-access' );
                }
            }
            // Determine plugin classes to be used.
            if ( 'static' === $project_page[0]['page_type'] ) {
                return '';
            } elseif ( 'table' === $project_page[0]['page_type'] ) {
                $list_view_class = 'WPDataProjects\\List_Table\\WPDP_List_View';
                $list_table_class = 'WPDataProjects\\List_Table\\WPDP_List_Table';
                $edit_form_class = 'WPDataProjects\\Simple_Form\\WPDP_Simple_Form';
            } else {
                $list_view_class = 'WPDataProjects\\Parent_Child\\WPDP_Parent_List_View';
                $list_table_class = 'WPDataProjects\\Parent_Child\\WPDP_Parent_List_Table';
                $edit_form_class = 'WPDataProjects\\Parent_Child\\WPDP_Parent_Form';
            }
            if ( null !== $project_page[0]['page_where'] && '' !== $project_page[0]['page_where'] ) {
                if ( 'where' === substr( str_replace( ' ', '', $project_page[0]['page_where'] ), 0, 5 ) ) {
                    $where_clause = " {$project_page[0]['page_where']}";
                } else {
                    $where_clause = " where {$project_page[0]['page_where']} ";
                }
                $where_clause = WPDA::substitute_environment_vars( $where_clause );
            } else {
                $where_clause = '';
            }
            if ( '' === $default_where ) {
                $default_where = $where_clause;
            } else {
                if ( '' === $where_clause ) {
                    $default_where = " where {$default_where} ";
                } else {
                    $default_where = " {$where_clause} and {$default_where} ";
                }
            }
            $default_orderby = $project_page[0]['page_orderby'];
            // Prepare arguments.
            $args = array(
                'page_hook_suffix' => 'WPDA_WPDP',
                'wpdaschema_name'  => $project_page[0]['page_schema_name'],
                'table_name'       => $project_page[0]['page_table_name'],
                'list_table_class' => $list_table_class,
                'edit_form_class'  => $edit_form_class,
                'project_id'       => $wp_atts['project_id'],
                'page_id'          => $wp_atts['page_id'],
                'default_where'    => $default_where,
                'where_clause'     => $default_where,
                'orderby_clause'   => $default_orderby,
            );
            if ( 'view' === $project_page[0]['page_mode'] ) {
                $args['allow_update'] = 'off';
                $args['allow_import'] = 'off';
            }
            if ( 'no' === $project_page[0]['page_allow_insert'] ) {
                $args['allow_insert'] = 'off';
                $args['allow_import'] = 'off';
            }
            if ( 'no' === $project_page[0]['page_allow_delete'] ) {
                $args['allow_delete'] = 'off';
            }
            if ( 'only' === $project_page[0]['page_allow_insert'] ) {
                $args['action'] = 'new';
                $args['allow_insert'] = 'only';
                $args['allow_update'] = 'off';
                $args['allow_import'] = 'off';
                $args['allow_delete'] = 'off';
            }
            if ( 'no' === $project_page[0]['page_allow_import'] ) {
                $args['allow_import'] = 'off';
            }
            if ( 'no' === $project_page[0]['page_allow_bulk'] ) {
                $args['bulk_actions_enabled'] = false;
            }
            // Show page.
            $project_page_view = new $list_view_class($args);
            $project_page_view->show();
        } else {
            // Show table administration page.
            $media_manager = new WPDA_List_View(array(
                'wpdaschema_name'      => $wp_atts['schema_name'],
                'table_name'           => $wp_atts['table_name'],
                'title'                => $wp_atts['title'],
                'subtitle'             => $wp_atts['subtitle'],
                'bulk_actions_enabled' => $bulk_actions_enabled,
                'search_box_enabled'   => $search_box_enabled,
                'bulk_export_enabled'  => $bulk_export_enabled,
                'show_view_link'       => $show_view_link,
                'allow_insert'         => $allow_insert,
                'allow_update'         => $allow_update,
                'allow_delete'         => $allow_delete,
                'allow_import'         => $allow_import,
                'default_where'        => $default_where,
            ));
            $media_manager->show();
        }
        ?>
		<script type='text/javascript'>
			// JS variable commonL10n is used in loaded scripts, copied from wp_default_scripts for responsive support
			/* <![CDATA[ */
			var commonL10n = {
				"warnDelete": "You are about to permanently delete these items from your site.\nThis action cannot be undone.\n 'Cancel' to stop, 'OK' to delete.",
				"dismiss": "Dismiss this notice.",
				"collapseMenu": "Collapse Main menu",
				"expandMenu": "Expand Main menu"
			};
			// Select all rows if checkbox cb-select-all-1 or cb-select-all-2 is clicked
			jQuery(function () {
				jQuery('#cb-select-all-1').on('click', function (event) {
					if (jQuery('#cb-select-all-1').is(':checked')) {
						jQuery('[name="bulk-selected[]"]').prop('checked', true);
						jQuery('#cb-select-all-2').prop('checked', true);
					} else {
						jQuery('[name="bulk-selected[]"]').prop('checked', false);
						jQuery('#cb-select-all-2').prop('checked', false);
					}
				});
				jQuery('#cb-select-all-2').on('click', function (event) {
					if (jQuery('#cb-select-all-2').is(':checked')) {
						jQuery('[name="bulk-selected[]"]').prop('checked', true);
						jQuery('#cb-select-all-1').prop('checked', true);
					} else {
						jQuery('[name="bulk-selected[]"]').prop('checked', false);
						jQuery('#cb-select-all-1').prop('checked', false);
					}
				});
			});
		</script>
		<style type="text/css">
			/*@media screen and (max-width: 782px) { .row-actions { position: initial !important; } }*/
			@media (hover:none) { .row-actions { position: initial !important; } }
		</style>
		<?php 
        return ob_get_clean();
    }

}
