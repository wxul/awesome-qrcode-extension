export default {
    methods: {
        doooo() {
            console.log(txt);
        },
        formatter(objName, obj) {
            var tmp = '';
            Object.keys(obj).forEach((e, i) => {
                var val = obj[e];
                if (!!val) {
                    tmp += `${e}:${val};`;
                }
            })
            return `${objName}:${tmp};`;
        }
    }
};