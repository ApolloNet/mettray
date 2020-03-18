import contents from '~/static/contents.json'

export default function ({store}) {
  store.commit('pages/add', contents)
}