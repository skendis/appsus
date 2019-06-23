
import noteActionBar from '../note-action-bar.cmp.js'
export default {

    template: `
		<section 
			:style="{'background-color': keep.bgColor }">
            <p>{{keep.data.text}}</p>
            <div class="videoWrapper">
                <iframe 
                :width="1280" 
                :height="720" 
                :src="videoUrl" 
                frameborder="0" allow="accelerometer; 
                autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                ></iframe>
            </div>            
            <note-action-bar :keep="keep" ></note-action-bar>
		</section>
	`,
    props: ['keep'],
    created() {
    },
    methods: {
    },
    date() {
        return {
        }
    },
    computed: {
        videoUrl() {
            const id = this.keep.data.src;
            const url = `https://www.youtube.com/embed/${id}`;
            // console.log(url)
            return url;
        },
    },
    mounted() {
    },
    components: {
        noteActionBar

    }
}