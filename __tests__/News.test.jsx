import React from 'react'
import {render} from '@testing-library/react'
import News from '../components/News'


describe('news', () => {
    it('render news row', () => {

        let article = {
            url : 'https://www.cnbc.com/2022/05/05/bill-gates-says-elon-musk-could-make-twitter-worse.html',
            title:'Bill Gates questions Elon Musk\'s goals with Twitter: \'He could make it worse\' - CNBC',
            source:{
                name:'cnbc'
            },
            urlToImage:'https://image.cnbcfm.com/api/v1/image/107017517-1645200499603-gettyimages-1236298089-jm1_6693.jpeg?v=1651738132&w=1920&h=1080'
        }

        const _render = render(<News article={article}/>);

        const text =  _render.getByText('Bill Gates questions Elon Musk\'s goals with Twitter: \'He could make it worse\' - CNBC').closest('a')

        expect(text).toHaveAttribute('href', 'https://www.cnbc.com/2022/05/05/bill-gates-says-elon-musk-could-make-twitter-worse.html')

    })
})
