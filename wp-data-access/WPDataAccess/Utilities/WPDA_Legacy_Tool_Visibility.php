<?php

namespace WPDataAccess\Utilities {

    use WPDataAccess\Plugin_Table_Models\WPDA_Design_Table_Model;
    use WPDataAccess\Plugin_Table_Models\WPDA_Publisher_Model;
    use WPDataAccess\Plugin_Table_Models\WPDA_Table_Settings_Model;
    use WPDataAccess\Plugin_Table_Models\WPDP_Project_Model;
    use WPDataAccess\Premium\WPDAPRO_Dashboard\WPDAPRO_Dashboard;
    use WPDataAccess\WPDA;

    class WPDA_Legacy_Tool_Visibility {

        public static function get() {

            // Get current legacy tool settings
            $option_legacy_tools = WPDA::get_option(WPDA::OPTION_PLUGIN_LEGACY_TOOLS );

            // Count active items
            $tables = WPDA_Publisher_Model::count();
            $forms = WPDP_Project_Model::count();
            $templates = WPDA_Table_Settings_Model::count();
            $designer = WPDA_Design_Table_Model::count();
            $dashboards = new WPDAPRO_Dashboard();
            $widget_list = $dashboards->get_widget_list();
            if (is_array($widget_list)) {
                $charts = 0;
                foreach ($widget_list as $widget) {
                    if ( 'chart' === $widget['widgetType'] ) {
                        $charts++;
                    }
                }
            }

            // Update legacy tool active items
            $option_legacy_tools['tables'][1] = $tables;
            $option_legacy_tools['forms'][1] = $forms;
            $option_legacy_tools['templates'][1] = $templates;
            $option_legacy_tools['designer'][1] = $designer;
            $option_legacy_tools['dashboards'][1] = is_array($widget_list) ? count($widget_list) : 0;
            $option_legacy_tools['charts'][1] = $charts ;

            return $option_legacy_tools;

        }

    }

}