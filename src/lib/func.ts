export function onInterval(callback: () => number, interval: number) {
    const intverval = setInterval(callback, interval)
}


export function timeUntil(date: string) {
    let to_date: Date = new Date(date)
    let now: Date = new Date()
    let dif = (to_date.getTime() - now.getTime())
    let out = millToTime(dif + 43200000) // 432... is 12 hours
    return out
}

export function exactAge(b_date: Date) {
	let Age = new Date(b_date).getTime()
    let date = new Date()
	let dif = date.getTime() - Age
	let convert = dif / 31556952000
	let out = convert.toString().substring(0,12)
    return out
}

export function millToTime(ms: number) {
    const years = Math.floor(ms / (365*24*60*60*1000));
    const yearsms = ms % (365*24*60*60*1000);
    const days = Math.floor(yearsms / (24*60*60*1000));
    const daysms = ms % (24*60*60*1000);
    const hours = Math.floor(daysms / (60*60*1000));
    const hoursms = ms % (60*60*1000);
    const minutes = Math.floor(hoursms / (60*1000));
    const minutesms = ms % (60*1000);
    const sec = Math.floor(minutesms / 1000);

    return [years, days, hours, minutes, sec];
}

export function difInDays(pubDate: Date) {
    let today = new Date()
    let date = new Date(pubDate)

    let Difference_In_Time =  today.getTime() - date.getTime()
    let Difference_In_Days= Math.floor(Difference_In_Time / (1000 * 3600 * 24))
    
    return Difference_In_Days
}