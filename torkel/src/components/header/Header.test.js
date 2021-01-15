import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', ()=>{
  let headerWrapper;
  beforeAll(()=>{
    headerWrapper = shallow(<Header/>);
  })

  it('displays Torkel logo', ()=>{
    let logo = headerWrapper.find('.header_logo');
    let logoAlt = logo.text('')

    expect(logo).toHaveLength(1);
    expect(logoAlt).toEqual('');

  })

  it ('displays Torkel header title', () =>{
    let headerTitle = headerWrapper.find('#title');
    let headerText=headerTitle.text();
    expect(headerTitle).toHaveLength(1)
    expect(headerText).toEqual('Torkel')
  })

})