<?php

namespace WPDataAccess\Utilities;

use WPDataAccess\Data_Apps\WPDA_App_Container;
use WPDataAccess\Plugin_Table_Models\WPDA_App_Model;
use WPDataAccess\WPDA;

class WPDA_Add_App_To_Menu {

	private $wp_admin_toolbar = array();

	public function add_apps_to_menu() {

		$apps = WPDA_App_Model::add_to_dashboard_menu();
		foreach ( $apps as $app ) {
			$settings = json_decode( $app['app_settings'], true );
			if (
				! isset(
					$settings['rest_api']['authorization'],
					$settings['rest_api']['authorized_roles'],
					$settings['rest_api']['authorized_users'],
					$settings['settings']['app_menu_title']
				)
			) {
				continue;
			}
			if ( $settings['rest_api']['authorization'] === 'authorized' ) {
				$authorized_roles = $settings['rest_api']['authorized_roles'];
				$current_user_roles = WPDA::get_current_user_roles();
				if ( 0 === count( array_intersect( $authorized_roles, $current_user_roles ) ) ) {
					$authorized_users  = $settings['rest_api']['authorized_users'];
					$current_user_name = WPDA::get_current_user_login();
					if ( ! in_array( $current_user_name, $authorized_users ) ) {
						continue;
					}
				}
			}

			$title = $settings['settings']['app_menu_title'];
            // Table | App
            $svg  = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="#f3f1f1" d="M9 6c0-1.6.8-3 2-4h-1c-3.9 0-7 .9-7 2c0 1 2.6 1.8 6 2zm3.8 4.8c-.9.1-1.9.2-2.8.2c-3.9 0-7-.9-7-2v3c0 1.1 3.1 2 7 2s7-.9 7-2v-2c-.9.7-1.9 1-3 1c-.4 0-.8-.1-1.2-.2zM10 15c-3.9 0-7-.9-7-2v3c0 1.1 3.1 2 7 2s7-.9 7-2v-3c0 1.1-3.1 2-7 2zm0-5h1c-1-.7-1.7-1.8-1.9-3C5.7 6.9 3 6 3 5v3c0 1.1 3.1 2 7 2zm4 0c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4zm-2.3-4.4l1.7 1.7l2.9-2.9l.7.7l-3.6 3.6L11 6.3l.7-.7z"/></svg>';
            switch ($app['app_type']) {
                case 1:
                case 3:
                case 4:
                    // Edit
                    $svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="#f3f1f1" d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02l-5.56 1.16l1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61l1.11 1.11l5.54-5.65zm-2.97 8.23l5.58-5.6l-1.07-1.08l-5.59 5.6z"/></svg>';
                    break;
                case 2:
                    // Map
                    $svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="#f3f1f1" d="M10 2C6.69 2 4 4.69 4 8c0 2.02 1.17 3.71 2.53 4.89c.43.37 1.18.96 1.85 1.83c.74.97 1.41 2.01 1.62 2.71c.21-.7.88-1.74 1.62-2.71c.67-.87 1.42-1.46 1.85-1.83C14.83 11.71 16 10.02 16 8c0-3.31-2.69-6-6-6zm0 2.56a3.44 3.44 0 1 1 0 6.88a3.44 3.44 0 0 1 0-6.88z"/></svg>';
                    break;
                case 6:
                    // Chart
                    $svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="#f3f1f1" d="M18 18V2h-4v16h4zm-6 0V7H8v11h4zm-6 0v-8H2v8h4z"/></svg>';
                    break;
                case 7:
                    // Dashboard
                    $svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="#f3f1f1" d="M3.76 16h12.48A7.998 7.998 0 0 0 10 3a7.998 7.998 0 0 0-6.24 13zM10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zM6 6c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm8 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm-5.37 5.55L12 7v6c0 1.1-.9 2-2 2s-2-.9-2-2c0-.57.24-1.08.63-1.45zM4 10c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm12 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm-5 3c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1z"/></svg>';
                    break;
            }
            if ( is_admin() ) {
				// Add app to dashboard menu
				add_menu_page(
					$title,
					$title,
					WPDA::get_current_user_capability(),
					$title,
					null,
                    'data:image/svg+xml;base64,' . base64_encode( $svg )
				);

				add_submenu_page(
					$title,
					$title,
					$title,
					WPDA::get_current_user_capability(),
					$title,
					function() use ( $app, $title, $settings ) {
						// Style not enqueued from container class.
						// Adding container style manually.
                        $fullscreen    = isset( $settings['settings']['app_start_full_screen'] ) ? $settings['settings']['app_start_full_screen'] : false;
                        $args          = array(
							'app_id'   => $app['app_id'],
							'feedback' => true,
                            'fullscreen' => $fullscreen,
						);
						$app_container = new WPDA_App_Container( $args );
						?>
						<div class="wrap wpda-dashboard-app">
							<h1 class="wp-heading-inline">
								<?php echo esc_html( $title ); ?>
							</h1>
							<?php $app_container->show(); ?>
						</div>
						<style>
                            .wrap.wpda-dashboard-app .pp-container-app {
                                margin: 20px 0 0 0;
                            }
						</style>
						<?php
					}
				);
			} else {
				// Add app to WordPress toolbar
				$this->wp_admin_toolbar[ $app['app_id'] ][] = array(
					'menu_id'    => $title,
					'menu_name'  => $title,
					'menu_title' => $title,
					'page_title' => $title,
				);
			}
		}

		if ( ! is_admin() ) {
			foreach ( $this->wp_admin_toolbar as $pid => $toolbar ) {
				foreach ( $toolbar as $key => $menu ) {
					if ( 0 === $key ) {
						$this->add_item_to_toolbar( $pid, $menu );
					}
					$this->add_item_to_toolbar( $menu['menu_id'], $menu, $pid );
				}
			}
		}

	}

	private function add_item_to_toolbar($pid, $menu, $parent = null ) {

		global $wp_admin_bar;
		$args = array(
			'id'    => $pid,
			'title' => null === $parent ? $menu['menu_name'] : $menu['page_title'],
			'href'  => admin_url('admin.php') . '?page=' . $menu['menu_id'],
			'zindex' => '9999',
			'meta' =>array(
				'class' => null === $parent ? 'wpda-wpdp-toolbar' : '',
				'title' => null === $parent ? $menu['menu_title'] : $menu['page_title'],
			)
		);
		if ( null !== $parent ) {
			$args['parent'] = $parent;
		}
		$wp_admin_bar->add_node( $args );

	}

}