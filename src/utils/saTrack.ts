import sa from 'sa-sdk-javascript';


declare global {
    interface Window {
        $sa: any;
    }
}


/* eslint-disable */
sa.init({
    server_url: process.env.REACT_APP_SERVER_URL,
    heatmap_url: 'https://static.sensorsdata.cn/sdk/1.12.18/heatmap.min.js',
    is_track_single_page:true,
    heatmap: {
        clickmap:'default',
        custom_property: () => {
            return {
            }
        }
    },
    use_app_track: true,
    show_log: false
});
/* eslint-enable */
sa.quick('autoTrack');


export default sa;
