import dayjs from 'dayjs'

const parseDate = (createdAt) => {
    return dayjs(createdAt).format("DD/MM/YYYY HH:mm")
};

export default parseDate