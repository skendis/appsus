
import { missEmailService } from '../services/missEmail-service.js'
import emailList from '../cmps/missEmail-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
export default {


    template: `
     <section class="email-app" v-if="emails">

            <div class="emails-side-bar"></div>
            <div>
                <email-list :emails="emails"></email-list>
            </div>
            <email-filter @set-filter="setFilter"></email-filter> 
            <email-list :emails="emailsToShow"></email-list>
     </section>
`
    ,
    data() {
        return {
            emails: [] ,
            filter: ''
             
        }
    },
    created() {
        missEmailService.query()
            .then((res) => {
                this.emails = res;
                console.log(res);
            })
    },
    computed: {
        emailsToShow() {
            if (!this.filter) return this.emails;
            return this.emails.filter(email => email.subject.includes(this.filter))
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        }
    },

    components: {
        emailList,
        emailFilter
    }

}