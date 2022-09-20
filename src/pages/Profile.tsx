import Cards from '../components/Cards'
import Footer from '../components/Footer'
import ProfileSummary from '../components/ProfileSummary'
import TopNavigationBar from '../components/TopNavigationBar'
import { getBookmarksFromLocalStrg } from '../utils/helpers'

function Profile() {
  const recipes = getBookmarksFromLocalStrg()
  return (
    <div>
      <div className="page-container flex flex-col flex-gap-20 heigth-min-90vh">
        <TopNavigationBar withTitle={{ title: 'Profile' }} condition={false} />
        <ProfileSummary
          numberOfRecipes={!recipes[0].strMeal ? 0 : recipes.length}
        />
        <div className="flex flex-col flex-gap-10">
          <h3 className="fs-18">Recipes</h3>
          {recipes.length === 1 && !recipes[0].strMeal ? (
            <p className="ta-center fs-14">
              You did not upload any recipe yet 🤷
            </p>
          ) : (
            <Cards recipes={recipes} width="100%" onSavedList={true} />
          )}
        </div>
      </div>
      <div style={{ position: 'sticky', bottom: '0', width: '100%' }}>
        <Footer />
      </div>
    </div>
  )
}
export default Profile
