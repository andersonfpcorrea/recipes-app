function TabsComponents() {
  return <h1>Oi</h1>
}

export default TabsComponents
/*
import { AnimatePresence, motion } from 'framer-motion'

const [activeTab, setActiveTab] = useState('Ingredients')

function handleTabs() {
  setActiveTab((prev) => {
    if (prev === 'Ingredients') return 'Procedures'
    return 'Ingredients'
  })
}

<div className="flex flex-col flex-gap-14">
        <div className="details-tabs" onClick={handleTabs}>
          <div>
            <button
              key="Ingredients"
              type="button"
              className="details-tabs__links"
            >
              Ingredients
            </button>
            {activeTab === 'Ingredients' ? (
              <motion.div
                className="details-tabs__links--active"
                layoutId="underline"
              />
            ) : null}
          </div>
          <div>
            <button
              key="Procedures"
              type="button"
              className="details-tabs__links"
            >
              Procedures
            </button>
            {activeTab === 'Procedures' ? (
              <motion.div
                className="details-tabs__links--active"
                layoutId="underline"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-jc-sb color-grey-dark-1">
          <div className="flex flex-gap-08">
            <GiHotMeal className="details-meal-icon" />
            <span className="fs-12"> 1 serve</span>
          </div>
          {activeTab === 'Ingredients' ? (
            <p className="fs-12">{ingredients.ingredients.length} items</p>
          ) : (
            <p className="fs-12">{steps} steps</p>
          )}
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <RenderIngredientsOrProcedures />
          </motion.div>
        </AnimatePresence>
      </div>
*/
