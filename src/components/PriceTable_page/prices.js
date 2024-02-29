export const prices = [
    {
        type:'Starter',
        price:'9.99',
        memory_size:true,
        backups_days:true,
        social_integrations:true,
        client_billing:true,
        remote_access:false,
        custom_domain:false,
        all_day_support:false,
        admin_tools:false,
        collaboration_tools: false,
        user_managment:false,

        [Symbol.iterator]() {
            const priceData = Object.entries(this);
            let index = 1;
            return {
                next(){
                    index++;
                    return {
                        value:priceData[index],
                        done: index >= priceData.length
                    }
                }
            }
        }
    },
    {
        type:'Professional',
        price:'19.99',
        memory_size:true,
        backups_days:true,
        social_integrations:true,
        client_billing:true,
        remote_access:true,
        custom_domain:true,
        all_day_support:false,
        admin_tools:false,
        collaboration_tools: false,
        user_managment:false,

        [Symbol.iterator]() {
            const priceData = Object.entries(this);
            let index = 1;
            return {
                next(){
                    index++;
                    return {
                        value:priceData[index],
                        done: index >= priceData.length
                    }
                }
            }
        }
    },
    {
        type:'Team',
        price:'49.99',
        memory_size:true,
        backups_days:true,
        social_integrations:true,
        client_billing:true,
        remote_access:true,
        custom_domain:true,
        all_day_support:true,
        admin_tools:true,
        collaboration_tools: true,
        user_managment:true,

        [Symbol.iterator]() {
            const priceData = Object.entries(this);
            let index = 1;
            return {
                next(){
                    index++;
                    return {
                        value:priceData[index],
                        done: index >= priceData.length
                    }
                }
            }
        }
    },
]