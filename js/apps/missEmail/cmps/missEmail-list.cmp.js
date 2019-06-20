//cmps import
import emailPreview from '../cmps/email-preview.cmp.js'


import  emailPreview from '../cmps/email-preview.cmp.js';

//service import
import { missEmailService } from '../services/missEmail-service.js'

export default {
    template: `
   <section>
        <ul class="email-list">
                <email-preview 
                              v-for="currentEmail in emails" 
                              :key="currentEmail.id"
                              :email="currentEmail">
                </email-preview>
            </ul>
    </section>
    `,
    props: ['emails'],
    data() {
        return {

        }
    },
    computed: {

    },
    created() {

    },
    methods: {

    },
    components:{
         emailPreview
    }
}