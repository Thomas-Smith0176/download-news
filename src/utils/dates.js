import dayjs from 'dayjs'

const parseDate = () => {
    return dayjs('2018-04-04T16:00:00.000Z').format("DD/MM/YYYY HH:mm")
};

export default parseDate