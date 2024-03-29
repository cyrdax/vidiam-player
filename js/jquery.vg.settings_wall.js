/* FLASH EMBED PART */

var jsReady = false;//flash vars

var flashvars2 = {},params2 = {},attributes2 = {};
attributes2.id = "flashPreview";
params2.quality = "high";
params2.scale = "noscale";
params2.salign = "tl";
params2.wmode = "transparent";
params2.bgcolor = "#111111";
params2.devicefont = "false";
params2.allowfullscreen = "true";
params2.allowscriptaccess = "always";
swfobject.embedSWF("preview2.swf", "flashPreview", "100%", "100%", "9.0.0", "expressInstall.swf", flashvars2, params2, attributes2);

//******** functions called from flash
function isReady() {return jsReady;}
/*main flash callbacks*/
function flashVideoEnd() {player1.flashVideoEnd(); }
function flashVideoStart() {player1.flashVideoStart(); }
function flashVideoPause() {player1.flashVideoPause(); }
function flashVideoResume() {player1.flashVideoResume();}
function dataUpdateFlash(bl,bt,t,d) {player1.dataUpdateFlash(bl,bt,t,d);}
/*preview flash callbacks*/
function flashPreviewVideoStart() {player1.flashPreviewVideoStart(); }

/* END FLASH EMBED PART */



/* SETTINGS */

var vplp_settings = {
	
	/*activePlaylist: Active playlist to start with. Enter element 'id' attribute, or if deeplink is used enter deeplink string like 'playlist1'.  */
	activePlaylist:'playlist1',
	
	/* GENERAL SETTINGS */
	/*autoHideControls: auto hide player controls on mouse out: true/false. Defaults to false on mobile. */
	autoHideControls:true,
	/*controlsTimeout: time after which controls and playlist hides in fullscreen if screen is inactive, in miliseconds. */
	controlsTimeout:3000,
	/*defaultVolume: 0-1 */
	defaultVolume:0.5,
	/*autoPlay: true/false (defaults to false on mobile)*/
	autoPlay:true,
	/*randomPlay: true/false */
	randomPlay:false,
	/* loopingOn: on playlist end rewind to beginning (last item in playlist) */
	loopingOn: true,
	/*autoAdvanceToNextVideo: true/false (use this to loop video) */
	autoAdvanceToNextVideo:true,
	/*autoOpenDescription: true/false  */
	autoOpenDescription:false,
	/*useLivePreview: true/false (if true, you need small videos for preview for local videos, otherwise thumbnails). Defaults to false on mobile. */
	useLivePreview:true,
	/*useWebmVideoFormat: true/false (Browser support for html5 video requires minimum of 2 video formats to cover all browsers, mp4 and ogv being preffered. Use web video format instead of a ogv.) */
	useWebmVideoFormat:false,
	/*aspectRatio: video aspect ratio (0 = original, 1 = fit inside, 2 = fit outside). */
	aspectRatio: 2,
	
	/*closePlaylistOnFsEntry: true/false (close playlist on fullscreen entry) */
	closePlaylistOnFsEntry:false,
	/*playlistOrientation: vertical/horizontal  */
	playlistOrientation:'vertical',
	/*playlistHidden: true/false (leaves css display none on 'playlistHolder' element) */
	playlistHidden:false,
	/*playlistType: list/wall  */
	playlistType:'wall',
	/*scrollType: scroll/buttons  */
	scrollType:'buttons',
	
	/* YOUTUBE SETTINGS */
	/*autoMakePlaylistThumb: true/false (auto make thumb for each video) */
	autoMakePlaylistThumb:true,
	/*autoMakePlaylistInfo: true/false (auto make title and description for each video) */
	autoMakePlaylistInfo:true,
	/* useYoutubeHighestQuality: true/false (use highest available quality for youtube video, if false, then it set to default)  */
	useYoutubeHighestQuality:false,
	
	/*flashPreview: id of the flash preview movie (for playlist) */
	flashPreview:'#flashPreview',
	/*flashMain: id of the flash main movie (for video) */
	flashMain:'#flashMain',
	
	/*previewPath: folder replacement path for the preview data */
	previewPath:'/preview/',
	/*wallPath: folder replacement path for the wall data */
	wallPath:'/wall/',
	
	buttonsUrl: {thumbnailPreloaderUrl: 'data/loading.gif'}
};


jQuery(document).ready(function($) {
	if(!isMobile && !ieBelow8){
		/*http://www.bulgaria-web-developers.com/projects/javascript/selectbox/*/
		$("#lp_playlist").selectbox({
			onChange: function (val, inst) {
				//console.log(val, inst);
				api_loadMedia(val);
			}
		});
	}else{//we want default mobile scroll on selectbox
		$('#lp_playlist').change(function() {
			//console.log($("#lp_playlist").val());
		  	api_loadMedia($("#lp_playlist").val());
		});
	}
});

