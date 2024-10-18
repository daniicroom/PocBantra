# tests/test_edge_selenium.py
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time
import unittest

class EdgeSeleniumTest(unittest.TestCase):
    def setUp(self):
        # Configurar opciones para ejecutar en modo headless
        edge_options = webdriver.EdgeOptions()
        edge_options.add_argument("--use-fake-ui-for-media-stream")
        edge_options.add_argument("--headless")  # Ejecución en modo headless para CI/CD
        edge_options.add_argument("--disable-gpu")
        edge_options.add_argument("--no-sandbox")
        edge_options.add_argument("--disable-dev-shm-usage")

        self.driver = webdriver.Edge(options=edge_options)

    def test_form_interaction(self):
        driver = self.driver
        try:
            url = "http://localhost:3001/"
            num_doc = '1'
            driver.get(url)
            driver.maximize_window()

            # Esperar a que el select esté disponible y seleccionar el tipo de ID
            select_tipo_id = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, '/html/body/div/div/form/select'))
            )
            Select(select_tipo_id).select_by_value('cc')

            # Esperar a que el input esté disponible y enviar el número de documento
            input_num_doc = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, '/html/body/div/div/form/input'))
            )
            input_num_doc.send_keys(num_doc)

            # Esperar a que el botón siguiente esté disponible y hacer clic
            boton_siguiente = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "/html/body/div/div/form/button"))
            )
            boton_siguiente.click()

            # Esperar a que el botón de foto esté disponible y hacer clic
            boton_foto = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "/html/body/div/div/div/button"))
            )
            time.sleep(10)
            boton_foto.click()

        except TimeoutException:
            print("Un elemento no se cargó a tiempo.")
        finally:
            # Cerrar el navegador
            time.sleep(5)
            driver.quit()

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
