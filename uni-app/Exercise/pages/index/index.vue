<template>
	<view class="container">

		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>

		<video id="videoId" src="https://media.w3.org/2010/05/sintel/trailer.mp4" poster="https://s1.52poke.com/wiki/thumb/7/7e/006Charizard.png/300px-006Charizard.png" @play="onPlay"
			@fullscreenchange="fullscreenchange"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				videoContext: null
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('videoId')
		},
		methods: {
			// 播放时全屏
			onPlay() {
				// this.videoContext = uni.createVideoContext('videoId', this)
				this.videoContext.requestFullScreen()
			},
			//退出全屏时停止
			fullscreenchange(e) {
				console.log(e)
				if (!e.detail.fullScreen) {
					console.log("进到这里")
					this.videoContext.pause()
				}
			},
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>