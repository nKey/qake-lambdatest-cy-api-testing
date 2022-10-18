export function acessarSite(url) {
	cy.visit(url, { failOnStatusCode: false})
}

export function preencheCampo(component, reference, value, options) {
	if (options) {
		cy.get(`${component}[data-cy*='${reference}']`).type(value, options)
		return
	}
	cy.get(`${component}[data-cy*='${reference}']`).type(value)
}

export function preencheCampoInput(reference, value, options) {
	if (options) {
		cy.get(`input[data-cy*='${reference}']`).type(value, options)
		return
	}
	cy.get(`input[data-cy*='${reference}']`).type(value)
}

export function preencheCampoReference(reference, value, options) {
	if (options) {
		cy.get(reference).type(value, options)
		return
	}
	cy.get(reference).type(value)
}

export function preencheCampoReferenceTab(reference, value, options) {
	if (options) {
		cy.get(reference).type(value, options).tab()
		return
	}
	cy.get(reference).type(value).tab()
}

export function preencheCampoReferenceId(reference, value, options) {
	if (options) {
		cy.get(`#${reference}`).type(value, options)
		return
	}
	cy.get(`#${reference}`).type(value)
}

export function limpaPreencheCampo(component, reference, value, options) {
	if (options) {
		cy.get(`${component}[data-cy*='${reference}']`)
			.clear(options)
			.type(value, options)
	}
	cy.get(`${component}[data-cy*='${reference}']`).clear().type(value)
}

export function limpaPreencheCampoInput(reference, value, options) {
	if (options) {
		cy.get(`input[data-cy*='${reference}']`).clear(options).type(value, options)
	}
	cy.get(`input[data-cy*='${reference}']`).clear().type(value)
}

export function limpaPreencheCampoTextArea(reference, value, options) {
	if (options) {
		cy.get(`textarea[data-cy*='${reference}']`)
			.clear(options)
			.type(value, options)
	}
	cy.get(`textarea[data-cy*='${reference}']`).clear().type(value)
}

export function limpaPreencheCampoReference(reference, value, options) {
	if (options) {
		cy.get(reference).clear(options).type(value, options)
		return
	}
	return cy.get(reference).clear().type(value)
}

export function selecionaCampo(reference, value) {
	cy.get(reference).select(value)
}

export function aguardar(value) {
	cy.wait(value)
}

// Ex: options = { force: true, multiple: true}
export function clicaNoCampo(component, reference, options) {
	if (options) {
		cy.get(`${component}[data-cy*='${reference}']`).click(options)
		return
	}
	cy.get(`${component}[data-cy*='${reference}']`).click()
}

export function clicaNoCampoButton(reference, options) {
	if (options) {
		cy.get(`button[data-cy*='${reference}']`).click(options)
		return
	}
	cy.get(`button[data-cy*='${reference}']`).click()
}

export function clicaNoCampoLink(reference, options) {
	if (options) {
		cy.get(`a[data-cy*='${reference}']`).click(options)
		return
	}
	cy.get(`a[data-cy*='${reference}']`).click()
}

export function clicaNoCampoDiv(reference, options) {
	if (options) {
		cy.get(`div[data-cy*='${reference}']`).click(options)
		return
	}
	cy.get(`div[data-cy*='${reference}']`).click()
}

export function clicaNoCampoReference(reference, options) {
	if (options) {
		cy.get(reference).click(options)
		return
	}
	cy.get(reference).click()
}

export function clicaNoCampoReferenceId(reference, options) {
	if (options) {
		cy.get(reference).click(options)
		return
	}
	cy.get(reference).click()
}

export function clicaNoCampoReferenceRealClick(reference, options) {
	if (options) {
		cy.get(reference).realClick(options)
		return
	}
	cy.get(reference).realClick()
}

export function clicaNoCampoReferenceRealClickId(reference, options) {
	if (options) {
		cy.get(`#${reference}`).realClick(options)
		return
	}
	cy.get(`#${reference}`).realClick()
}

// Ex: options = { force: true, multiple: true}
export function clicaNoCampoVerificandoValor(reference, value, options) {
	if (options) {
		cy.get(reference).contains(value).click(options)
		return
	}
	cy.get(reference).contains(value).click()
}

export function carregarArquivo(reference, files) {
	cy.get(reference).attachFile(files)
}
export function carregarArquivoReference(reference, files) {
	cy.get(reference).attachFile(files)
}

export function verificaCampo(component, reference, value) {
	cy.get(`${component}[data-cy*='${reference}']`).contains(value)
}
export function verificaCampoReference(reference, value) {
	cy.get(reference).contains(value)
}

export function verificaCampoVisivel(reference, value) {
	cy.get(reference).contains(value).should('be.visible')
}
// Ex: options = { ensureScrollable: false }
export function moverScroll(x, y, options) {
	if (options) {
		cy.scrollTo(x, y, options)
		return
	}
	cy.scrollTo(x, y)
}

export function moverScrollPorPosicao(position) {
	cy.scrollTo(position)
}

export function voltar() {
	cy.go('back')
}

export function propertyValueInArray(arr, property, value) {
	return arr.map(e => e[property]).includes(value)
}

// XPATH FUNCTIONS

export function preencheCampoXPath(reference, value, options) {
	if (options) {
		cy.xpath(reference).type(value, options)
		return
	}
	cy.xpath(reference).type(value)
}

export function verificaCampoXPath(reference, value, options) {
	if (options) {
		cy.xpath(reference, options).contains(value)
		return
	}
	cy.xpath(reference).contains(value)
}

// Ex: options = { force: true, multiple: true}
export function clicaNoCampoXPath(reference, options) {
	if (options) {
		cy.xpath(reference).click(options)
		return
	}
	cy.xpath(reference).click()
}

export function selecionaCampoXPath(reference, value) {
	cy.xpath(reference).select(value)
}

export function carregarArquivoXPath(reference, files) {
	cy.xpath(reference).attachFile(files)
}

export function limpaPreencheCampoXPath(reference, value, options) {
	if (options) {
		cy.xpath(reference).clear(options).type(value, options)
		return
	}
	cy.xpath(reference).clear().type(value)
}

export function verificaCampoVisivelXPath(reference, value) {
	cy.xpath(reference).contains(value).should('be.visible')
}
